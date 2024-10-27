import { Request, Response } from "express";
import Product from "../models/product";
import products from '../data/products.json';

// Получить товары
export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        // const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
}

// Добавить новый товар
export const addProduct = async (req: Request, res: Response): Promise<void> => {
    const { name, description, price, category, stock, imageUrl } = req.body;

    try {
        const newProduct = new Product({
            name, description, price, category, stock, imageUrl
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: 'Неверные данные' });
    }
}