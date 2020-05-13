const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());  
app.use(bodyParser.json({
  limit: '500mb'
}));
app.use(bodyParser.urlencoded({
  limit: '500mb',
  extended: true
}));



app.use('/login-user', require('./routes/loginUser'));



const port = 3000
app.listen(port, () => console.log(`app listening at http://localhost:${port}`))