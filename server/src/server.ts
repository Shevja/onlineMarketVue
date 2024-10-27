import express, { Application } from "express";
import dotenv from "dotenv";
// import connectDB from "./config/db";
import productRoutes from './routes/productRoutes';
import cors from 'cors';

dotenv.config();

// connectDB()

const app: Application = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    credentials: true
}))

app.use(express.json());

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});