const http = require('http')
require('dotenv').config()

const PORT = process.env.PORT

http.createServer( (req, res) => {
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
        res.end(JSON.stringify({ resultado: `${calculo}`, calculo: `${result}` }))
}).listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
})