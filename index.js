const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://o3o:o3o@boilerplate.p5derrp.mongodb.net/?retryWrites=true&w=majoritynp',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!QydQYD')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})