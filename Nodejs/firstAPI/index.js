const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

let data = [{ name: "Sandeep" }, { name: "Pradeep" }, { name: "Prinsa" }]

app.get('/', function (req, res) {
    res.send("Hello I am Pradeep")
})

app.get('/api2', function (req, res) {
    res.send(["Sandeep","Rajan"])
})

app.get('/familyMember', function (req, res) {
    res.send(data)
})


app.listen(3000, () => {
    console.log("Server started running on port 3000");
})