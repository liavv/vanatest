const service = require("../../api/v1/services/get-data/get-data.service");
const router = require('express').Router();

module.exports = function(app){
    const handle = app.getRequestHandler();
    router.get('/_next/*',async(req,res)=>{
       return handle(req,res,req.url);
    });
    router.get('/',async (req,res)=>{
        const data = await service.getList(req);
        res.data = {
            data:data
        }
        return app.render(req,res,'/',req.url);
    });
    return router;
};