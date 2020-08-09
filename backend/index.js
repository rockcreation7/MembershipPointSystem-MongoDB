const dotenv = require('dotenv');
dotenv.config()
const express = require('express') 
const mongoose = require ('mongoose')
const cors = require('cors')
const path = require('path')
const formRoute = require ('./routes/formRoute') 
const adminRoute = require ('./routes/adminRoute') 
const setting = require('./config.js') 

console.log(setting)

const db = mongoose.connection
const url = setting.MONGODB_URL

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

db.once('open', (_) => {
  console.log('Database connected', url)  
})  
db.on('error', (err) => {
  console.error('connection error', err)  
})  

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '/../frontend/build')))
app.use('/api/form', formRoute)
app.use('/api/admin', adminRoute)

app.listen(4000)