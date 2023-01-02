const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
	res.sendFile('./home.html' , { root: __dirname })
});

app.listen(3000,()=>console.log('listening to port 3000'));
