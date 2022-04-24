const express = require('express')
const app = express()
const port = 80

app.post('/product/1', (req, res) => {
    console.log(req.headers)
    res.json({"id":1,"name":"Hoodie + Tee","stock":56})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})