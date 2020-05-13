const mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  });

  connection.connect((err)=>{
      if(err){
          throw err
      }
      console.log("mysql connected..")
  })

  module.exports = connection;


// const mongo = require('mongodb')

// let db;
// let connectOne = async () => {
  
// const url = process.env.NONGO_URI || 'mongodb://localhost:27017';
// const connection = await mongo.MongoClient.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// db = connection.db('managementUsers');
// };
// connectOne()

// let connectDB = (coll) =>  {
// return db.collection(coll);
// };

// module.exports = connectDB;