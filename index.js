import express from"express";
import mongoose from "mongoose"
import productRouter from "./routes/product.js";
const app=express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use("/product",productRouter);
app.listen(6000,()=>{
    console.log("Server is running on port 6000");
});
