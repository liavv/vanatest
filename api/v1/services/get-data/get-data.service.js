const repository = require('./get-data.repository');
async function getList(req){

    return await repository.getList(req);
}

module.exports = {
    getList
};