const express = require('express') 
const mongoose = require ('mongoose')
const cors = require('cors')
const path = require('path')
const userRoute = require ('./routes/formRoute') 
const url = 'mongodb://127.0.0.1:27017/formdata'   
const db = mongoose.connection

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
app.use('/api/form', userRoute)

app.listen(4000)