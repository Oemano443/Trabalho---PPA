const mysql = require('mysql2/promise');


const express = require("express");


const app = express();


async function consulta(){
const connection = await mysql.createConnection({
    host: 'mysql2',
    user: 'root',
    password:'',
    database: 'dbConsulta',
  });


  const [resultado] = await connection.query('SELECT * FROM `usuarios`;');

  return resultado
}





app.get('/', (request, response) =>{
    return response.status(200).json({
            message: 'raiz'
        })
});


app.get('/consulta-dados', async (request, response) => {  
    
    const resultado = await consulta();

    return response.status(200).json({
      message: 'Resultado da consulta',
      dados: resultado,
    });
 
});



app.get('/liveness', (request, response) =>{
    return response.status(200).json({
            message: 'liveness',
            
       
        })
});


app.get('/readiness', (request, response) =>{
    return response.status(200).json({
            message: 'readiness'
        })
});


module.exports = app;