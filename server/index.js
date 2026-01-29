import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';
import pool, { testConnection } from './config/db-config.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3307;

app.use(cors({
    origin: 'http://localhost:3307',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running!' });
});

app.get('/api/data', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT schltadi_id, schltadi_mode, schltadi_type, schlprof_id FROM schooltadi LIMIT 20');
        
        res.json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch files',
            error: error.message
        });
    }
});

// app.get('/api/files/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
        
//         const [rows] = await pool.query('SELECT * FROM files WHERE id = ?', [id]);
        
//         if (rows.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'File not found'
//             });
//         }
        
//         res.json({
//             success: true,
//             data: rows[0]
//         });
//     } catch (error) {
//         console.error('Error fetching file:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to fetch file',
//             error: error.message
//         });
//     }
// });

// app.post('/api/files', async (req, res) => {
//     try {
//         const { name, dateTime, owner, location } = req.body;
        
//         if (!name || !owner) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Name and owner are required'
//             });
//         }
        
//         const [result] = await pool.query(
//             'INSERT INTO files (name, dateTime, owner, location) VALUES (?, ?, ?, ?)',
//             [name, dateTime || new Date(), owner, location || 'Unknown']
//         );
        
//         res.status(201).json({
//             success: true,
//             message: 'File created successfully',
//             data: { id: result.insertId, name, dateTime, owner, location }
//         });
//     } catch (error) {
//         console.error('Error creating file:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to create file',
//             error: error.message
//         });
//     }
// });




app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
    await testConnection();
});