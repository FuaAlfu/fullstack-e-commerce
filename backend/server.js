require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();
const app = express();

// middleware
app.use(express.json());

//routes
app.use('./api/products', productRoutes);



const PORT = process.env.PORT || 5000;

// app.get('/',(res,req) =>{
//     res.send("get")
// })

app.listen(PORT, () => console.log(`servin on ${PORT} port ...`))