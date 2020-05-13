// const uuidv1 = require('uuid/v1');
const connectDB = require('../connectDB.js');

class Post {
  constructor(objData, coll) {
    this.objData = objData;
    this.coll = coll;
  }
  async connect() {
    return connectDB
  }
  checkPassLogin(res) {
    let sql = `SELECT password, connectionInfo FROM users WHERE email =  '${this.objData.email}'`;
    connectDB.query(sql, (err, result) => {
      if(err) throw err;
      if(result.length) {
        console.log(result[0])
        if(result[0].password === this.objData.password) {
          res.status(200).json(result[0].connectionInfo)
        } else {
        res.status(403).send()
        }
      } else {
        res.status(403).send()
      }
    })

    // console.log(query)

    // const connect = await this.connect();
    // let obj = await connect.findOne({
    //     email: this.objData.email
    // });
    // if (obj === null) {
    //   return false
    // }
    // if (obj.password === this.objData.password) {
    //   return obj;
    // }
    // return false
  }
}

module.exports = Post;