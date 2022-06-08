const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, './build/index.html'), (err, data) => {
        if (err) console.log('fail')
        res.send(data)
    })
})

app.listen(8787, () => {
    console.log('server running http://127.0.0.1:8787')
})