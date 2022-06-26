let express = require("express");
let mongoose = require("mongoose");
let app = express();
let ejs = require("ejs");
let port = 8080
let index = require('./routes/index');
let todoRoute = require('./routes/todoRoutes');
let userRoute = require('./routes/userRoute');
let usersRoute = require('./routes/usersRoute');


mongoose.connect("mongodb://localhost/Todo-Node")
let db = mongoose.connection;
db.once('open',()=>{
    console.log('mongodb is connected successfully');
})

// app.use('/',index);
app.use('/',todoRoute)
app.use('/users',usersRoute);
console.log(__dirname) //gives directory name
console.log(__filename) //gives file name

app.set('views',__dirname+'/view');
app.engine('ejs',ejs.renderFile);
app.set('view engine','ejs');

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});



module.exports = app;