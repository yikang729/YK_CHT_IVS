const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,'/public')))

app.listen(8787, () => {
    console.log('server running http://127.0.0.1:8787')
})