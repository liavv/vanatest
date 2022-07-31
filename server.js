const express = require('express');
const bodyParser = require('body-parser');
const dev = process.NODE_ENV !== 'production';
const app = require('next')({dev, dir: './client'})
const views = require('./client/views/views');
const routes = require("./api/v1/routes");
app.prepare().then(()=>{
    const server = express();
    server.use(bodyParser.urlencoded({extended:false}));
    server.use(bodyParser.json());

    server.use('/', views(app));
    server.use('/api/v1/',routes(server,null))

    server.use(function(err,req,res,next){
        return next();
    });

    server.listen(3000,err=>{
        if (err) throw err;
        console.log('listen on port 3000');
    })
}).catch(e=> {
    console.log('failed start server', e.message);
    process.exit(-1);
});