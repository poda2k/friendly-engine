const express = require('express') ;
const app = express() ;
const connection = require('./models/connection');
const parser = require('body-parser') ;
const path = require('path');
const home = require('./routes/homeRoute');
const DataRoutes = require('./routes/DataRoutes');
const Sessions = require('express-session') ;
const seqSessions = require('express-session-sequelize')(Sessions.Store) ;


const user = require('./models/user');
// const path = path.dirname(require.main.filename);

const sessions = new seqSessions({
        db : connection ,
        collection : 'sessions'
});

app.use(Sessions({
    secret : "MYDAMNSECret" ,
    resave : false ,
    saveUninitialized : false ,
    store : sessions
}))

app.use(express.static(path.join(__dirname,'public')))
app.use(parser.urlencoded({extended:false})) ;
app.set('view engine','ejs');
app.set('Views' , 'views');

app.use(home) ;
app.use(DataRoutes);

connection.sync()
.then(result =>{
    app.listen(4000) ;
    console.log("all set");
})
.catch(error=>{
    console.log(error);
})

