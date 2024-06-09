const express = require("express");
const os = require("os");
const app = express();

app.get('/', (request, response) =>{
    return response.status(200).json({
            message: 'teste'
        })
});

app.get('/liveness', (request, response) =>{
    return response.status(200).json({
            message: 'App escutando (liveness), servidor funcionando',
            
       
        })
});


app.get('/readiness', (request, response) =>{
    return response.status(200).json({
            message: 'App pronto (readiness)'
        })
});


module.exports = app;