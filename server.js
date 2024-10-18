import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

const users = [];

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

app.post('/api/register', async (req, res) => {
  // ... (registration logic remains the same)
});

app.post('/api/login', async (req, res) => {
  // ... (login logic remains the same)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));