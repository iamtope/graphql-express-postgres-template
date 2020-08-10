const { db }= require('./pgAdaptor')
console.log(db);
db.one('select * from users')
.then(res => {
    console.log(res);
})