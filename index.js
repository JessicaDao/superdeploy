const express = require("express");

const app = express();
const PORT: process.env.PORT||3000;

const turtles = [
    {
        name: "leo",
        isTeenageMutant : true
    },
    {
        name: "sheldon",
        isTeenageMutant : false
    }
]

app.get("/", (req, res)=>{
    res.send ('welcome to my site!')
})

app.get("/turtles",(req, res)=>{
    res.json(turtles);
})

app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`)
})