const http = require('http');
const app = require("./app.js");

const port = 3006;

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log('Escutando na porta: '+port )
})