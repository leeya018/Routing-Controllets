
var MongoClient = require('mongodb').MongoClient;


export class Mongo {

    connectToServer() {
        return new Promise((resolve,reject) => {
            MongoClient.connect("mongodb://localhost:27017", function (err: Error, client: any) {
                if (err) {
                    reject(err)
                }
                let dbCon = client.db('Dating')
                resolve(dbCon)
                // resolve(1)
            });
        })

    }

};