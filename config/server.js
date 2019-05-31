const app = require("../app/app");
const http = require("http");
const express = require("express");
const server = http.createServer(app);
const router = express.Router();

const port = normalizePort(process.env.PORT || '3000');

function normalizePort(val){
    const port = parseInt(val,10);
    if (isNaN(port)){
        return val;
    }
    if (port>=0){
        return port;
    }
    return false
}

server.listen(port,(err)=>{
    if(err) console.log(err);
    console.log("Servidor rodando na porta " + port);
})