const router = require('express').Router();

module.exports = function(app){
    const handle = app.getRequestHandler();
    router.get('/_next/*',async(req,res)=>{
       return handle(req,res,req.url);
    });
    router.get('/',async (req,res)=>{
        return app.render(req,res,'/',req.url);
    });
    return router;
};