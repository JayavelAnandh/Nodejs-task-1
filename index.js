const express = require ("express")
const fs = require("fs")
const app = express();

let Time = new Date();
let TimeStamps="Current Timing :"+Time.toUTCString()


// let currentDetails = Time.toUTCString()
// let month = (Time.getMonth())+1
// let date = Time.getDate()
// let year = Time.getFullYear()  For references
 

app.get("/time",(req,res)=>{
    fs.writeFile("./TimeStamps/current date-time.txt",TimeStamps,(err)=>{
        if(err){
            console.log(err)
            res.send("Error  :   "+err)
    }
    else{
        res.send("File Created succesfully")
    } 
    })
    
})
    app.listen(6500)
