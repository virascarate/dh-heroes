//subido a repositorio dh-heroes

const express = require ('express');
const path = require ('path')
const app = express();
const staticFiles = express.static('public')
app.use(staticFiles)

app.get('/home',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/index.html'))
})
app.get('/babbage',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/babbage.html'))
})

app.get('/berners-lee',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'))
})
app.get('/clarke',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/clarke.html'))
})
app.get('/hamilton',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
})
app.get('/hopper',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/hopper.html'))
})
app.get('/lovelace',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/lovelace.html'))
})
app.get('/turing',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/turing.html'))
})
app.listen (3000,()=>{console.log('Servidor corriendo http://localhost:3000/home')})