require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
require('./db/conn')
const cors = require('cors');


app.use(cors());
app.use(express.json());

// admin routes

const adminAuthroutes= require('./routes/admin/adminAuthroutes')
app.use('/adminauth/api',adminAuthroutes);

// products routes

const productroutes = require('./routes/products/productRoutes')
app.use('/product/api',productroutes);

// user routes 

const userAuthroutes = require('./routes/user/userAuthRoutes')
app.use("/userauth/api",userAuthroutes)

// carts routes 

const cartsroutes = require("./routes/carts/cartsroutes")
app.use("/carts/api",cartsroutes);

// payment routes
const paymentroutes = require("./routes/payment/PaymentRoutes");
app.use("/checkout/api",paymentroutes);

// order routes
const orderroutes = require("./routes/order/orderRoutes");
app.use("/order/api",orderroutes)


app.get("/",(req,res)=>{
    res.status(200).json("server is started")
})



app.listen(port, ()=>{
    console.log(`server start at port no ${port}`)
})


