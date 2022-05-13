const express = require("express") 
const app = express() // calling the express funtion
const port = 3011 //create a port

app.get ('/', (req, res) => {
    res.send("<h1>Hello, World. we are here.</h1>")
})


app.listen(port, () =>{
    console.log(`Server runs on port : ${port}`)
})
