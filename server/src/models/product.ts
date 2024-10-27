import { Schema, model, Document } from "mongoose";

interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    imageUrl: string;
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    category: String,
    stock: {
        type: Number,
        default: 0,
    },
    imageUrl: String
}, { timestamps: true });

const Product = model<IProduct>("Product", productSchema);

export default Product;