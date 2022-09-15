import express from "express";
const app = express()

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send({hello: 'world'})
})


app.listen(9000, () => console.log('server running in port 9000'))