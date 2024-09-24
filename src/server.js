const express = require(express)
const app = express()

app.get("/",(req,res)=> {
    res.send("hello word")
})

app.all("/secreto", (req, res, next) => {
    console.log("acessando o segredo")
    next()
})
