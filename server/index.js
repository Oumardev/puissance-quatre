const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('welcome to home')
})

app.listen(8000,()=>{
    console.log(`server listen on http://localhost:8000`)
})