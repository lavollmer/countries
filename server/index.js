import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/country', async(req,res) => {
    const country = req.query.query;
    const apiKey = process.env.VITE_REACT_APP_COUNTRY;

    try {
        const response = await axios.get('http://localhost/api/country')
        res.json(response.data);
    } catch {
        console.error('Error fetching from API:', error.message)
        res.status(500).json({error:'Failed to fetch location data'});
    }
})

app.listen(PORT, () => {
    console.log(`Server running on 'http://localhost:${PORT}'`)
})

