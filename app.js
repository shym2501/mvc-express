const express = require('express')
const app = express()
const port = 3000

//Import Routers
const Home = require('./routes/home.js')

//Express config
app.use(express.json())
app.use(express.urlencoded({extended: false }))
app.use(express.json())

//Use Router
app.use(Home)

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})