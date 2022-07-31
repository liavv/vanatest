const MongoClient = require("mongodb").MongoClient;
const uuid = require('uuid');
async function getList (req) {
    let mongoData=[];
    try{

        const uri = "mongodb+srv://liavv:lnlgyv0704@cluster0.k5dx2.mongodb.net/?retryWrites=true&w=majority";
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        const db = await client.db('VanaDB');
        const collection = await db.collection('shoppingList');
        const result = await collection.find({}).sort('productId','desc').toArray();
        let resultFixed = [];
        result.map((item)=>{
            resultFixed.push({text:item.productName, id: item.productId, uuid: item.uuid});
        });
        return {data: resultFixed};

    }
    catch (e){
        console.error(`error on getWeatherDataFromApi message is ${e.message}`);
        throw e;
    }

}
module.exports = {
    getList
};