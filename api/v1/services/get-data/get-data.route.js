const express = require('express');
const service = require("./get-data.service");
const router = express.Router();

router.route('/get-list').get(getList);


async function getList(req,res){
    try{
        const result = await service.getList(req);
        if (result == null){
            res.json({err:true});
        }
        else {
            res.json({err: null, data: result});
        }
    }
    catch (e){
        res.json({err:e.message});
    }
}

module.exports = router;