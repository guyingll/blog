var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}));
    

/*
// var mongo = require('mongodb');
// var server = new mongo.Server(host, port, options);
// db = new mongo.Db(mydb, server, {fsync:true});
// db.open(function(err, db) {
    // if(!err) {
        // console.log("Connected to database");
        // db.authenticate(user, password, function(err, res) {
            // if(!err) {
                // console.log("Authenticated");
            // } else {
                // console.log("Error in authentication.");
                // console.log(err);
            // }
        // });
    // } else {
        // console.log("Error in open().");
        // console.log(err);
    // };
    
    
    
// });
// 
// exports.testMongo = function(req, res){
    // db.collection( mycollection, function(err, collection) {
        // collection.find().toArray(function(err, items) {
            // res.send(items);
        // });
    // });
// };*/
