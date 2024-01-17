const express = require('express');
const { readFile } = require('fs');
const fs = require ('fs').promises;

const app = express();

app.get('/', async (req, res)=>{
    // fs.readFile('./home.html' , 'utf8', (err, html)=>{
    //     if(err){
    //         response.status(500).send('out of order')
    //     }
    //     res.send(html)
    // })
try{
    response.send(await readFile('./home.html', 'utf8'))
} catch (error){
    res.status(500).send('out of order')
}
})

app.listen(process.env.port||3000, ()=>console.log(`app available on http://localhost:3000`))