const express = require('express');
const router = express.Router();
const knex = require('../models/db_config');


// Home page
router.get("/",async(req,res)=>{
    const data = await knex('users').select("*")
    res.render('home',{data:data})
})
// To add new user
router.post("/adduser",async (req,res)=>{
    const body = req.body
    await knex('users').insert(body)
    .then((result) => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
    });

})

//to render a adduser page
router.get("/submit",(req,res)=>{
    res.render('adduser')
})

//to delete user
router.get('/delete/:id',async (req,res)=>{
   await knex('users')
   .where('id',req.params.id)
   .del()
   .then((d)=>{
       if (d){
           // again home page after deleting
        res.redirect('/')
       }
   }).catch((err)=>{
       console.log(err)
   })
})

// to view a user
router.get("/view/:id",async(req,res)=>{
    await knex('users')
            .select("*")
            .where("id",req.params.id)
        .then((data)=>{
            if (data.length!=0){
                res.send({User:data})
            }
        }).catch((err)=>{
            console.log(err)
            res.send({msg:err})
        })
})

// to edit user's details
router.get('/edit/:id',async(req,res)=>{
    res.render('edit')
})
module.exports = router;