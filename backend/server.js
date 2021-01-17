require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/',(res,req) =>{
//     res.send("get")
// })

app.listen(PORT, () => console.log(`servin on ${PORT} port ...`))