// const Sequelize = require('sequelize').Sequelize;

// const sequelize = new Sequelize('node_complete', 'root', '#Dang101061', 
// {dialect: 'mysql', host: 'localhost'});

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {

    MongoClient.connect('mongodb+srv://tuanga99:ZW1TRa6SiWeDNMAk@cluster0.vnzft.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

const getDb = () => {
    if (_db) return _db;
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;