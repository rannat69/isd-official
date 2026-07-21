import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), '/pages/api/news_events.json');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.method);

    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    try {
        // Read news
        const data = fs.readFileSync(dataPath, 'utf8');
        const news = JSON.parse(data);

        const idToGet = req.body.id;

        console.log('idToGet', idToGet);

        const updatedNews = news.filter((article) => article.id === idToGet);

        console.log('updatedNes', updatedNews);

        // Process your data here (e.g., modify articles or add new ones)
        // Assuming you want to return the articles
        res.status(200).json(updatedNews); // Sending back articles data as response
    } catch (error) {
        console.error('Error reading articles.json:', error);
        res.status(500).json({ message: 'Error reading data' });
    }
}
