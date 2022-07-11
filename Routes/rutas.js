const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const vara1 = req.headers.a1
    const vara2 = req.headers.a2
    const varb1 = req.headers.b1
    const varb2 = req.headers.b2
    var result = (vara1 * varb1 + vara2 * varb2)

    var calculo = ""
    if (result === 0) {
        calculo = "Es Ortogonal"
    } else {
        calculo = "No Es Ortogonal"
    }
    //const calculo = result = 0 ? "Es Ortogonal" : "No es Ortogonal";
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    //res.setHeader("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json')
    res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
    res.end(JSON.stringify({ resultado: `${calculo}`, calculo: `${result}` }))
})

module.exports = router