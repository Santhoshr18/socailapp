const express = require('express')
const format = require('date-format')
const PORT = process.env.PORT || 4000 

const app = express()

app.get('/',(req,res) => {
    res.status(200).send("<h1>Home Page</h1>")
})

app.get('/api/v1/instagram', (req,res) => {
    const socialData = {
        username : "santhosh_sr3",
        followers: 456,
        following: 809,
        date: format.asString("dd/MM hh:mm",new Date())
    }
    res.status(200).json(socialData)
})

app.get('/api/v1/facebook', (req,res) => {
    const socialData = {
        username : "santhosh r",
        followers: 873,
        following: 12,
        date: format.asString("dd/MM hh:mm",new Date())

    }
    res.status(200).json(socialData)
})

app.get('/api/v1/linkdin', (req,res) => {
    const socialData = {
        username : "santhosh ramesh",
        followers: 56,
        following: 09,
        date: format.asString("dd/MM hh:mm",new Date())

    }
    res.status(200).json(socialData)
})

app.get('/api/v1/:userinput',(req,res) => {
    res.status(200).json({param : req.params.userinput})
    console.log(req.params.userinput);
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})