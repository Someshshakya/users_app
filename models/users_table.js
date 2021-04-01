const knex = require('./db_config');

module.exports =  knex.schema.hasTable('users')
    .then(async exists=>{
    if (!exists){
        await knex.schema.createTable('users',(t)=>{
            t.increments('id').primary();
            t.string('first_name', 100);
            t.string('last_name', 100);
            t.string('email', 100).unique();

        },console.log('user table created with expected coulmns name'))
    }
}).catch(err=>{
    console.log(err)
})
