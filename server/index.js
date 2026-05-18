import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL Connection
const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect()
    .then(() => console.log('Connected to PostgreSQL Database (ironiq)'))
    .catch((err) => console.error('Error connecting to PostgreSQL:', err));

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from IRONIQ API!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));