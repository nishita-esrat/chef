
const express = require('express')
const cors = require('cors')
let app = express()

app.use(cors())

app.get('/health', (_req, res)=> {
  res.json({msg: 'server is running'})
})

app.listen(800,()=>{
    console.log("server is running on port 800")
})