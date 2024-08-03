import mongoose from "mongoose";
const schema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true,min:0 },
    description:{ type: String, required: true },
});

const productModel = mongoose.model("product", schema);
export default productModel;