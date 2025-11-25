// pages/api/articles.js
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data/articles.json');

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Read existing articles
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({ error: 'Error reading data' });
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    } else if (req.method === 'POST') {
        // Add a new article
        const newArticle = req.body;

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({ error: 'Error reading data' });
                return;
            }

            const articles = JSON.parse(data);
            articles.articles.push(newArticle); // Add new article

            fs.writeFile(dataPath, JSON.stringify(articles, null, 2), (err) => {
                if (err) {
                    res.status(500).json({ error: 'Error writing data' });
                    return;
                }
                res.status(201).json(newArticle);
            });
        });
    } else {
        // Handle other HTTP methods (e.g., PUT, DELETE) as needed
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
