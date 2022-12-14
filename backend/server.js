import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
connectDB();

import contactRoutes from './router/contact.js';
import authRoutes from './router/auth.js';
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/contact', contactRoutes);
app.use('/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
