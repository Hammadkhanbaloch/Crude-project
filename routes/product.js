import express from "express";
import productModel from "../models/product.js";
const data=express.Router();
// Get all products or filter by filter parameters
data.get('/', async (req, res) => {
    try {
        const filter = {};
        if (req.query.name) {
            filter.name = req.query.name;
        }
        if (req.query.description) {
            filter.description = { $regex: req.filter.description, $options: 'i' }; 
        }
        if (req.query.price) {
            filter.price = req.query.price;
        }
        const products = await productModel.find(filter);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

data.get("/:id", async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.json(product);
    } catch ({ message }) {
        res.json({ message });
    }
});

data.post("/", async (req, res) => {
    try {
        const result = await productModel.create(req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

data.patch("/:id", async (req, res) => {
    try {
        const result = await productModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

data.delete("/:id", async (req, res) => {
    try {
        const result = await productModel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

data.delete("/", async (req, res) => {
    try {
        const result = await productModel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
})
export default data;