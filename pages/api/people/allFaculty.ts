import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), '/pages/api/faculty.json');

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
        // Read faculty.json
        const data = fs.readFileSync(dataPath, 'utf8');
        const faculty = JSON.parse(data);

        // Process your data here (e.g., modify articles or add new ones)
        // Assuming you want to return the articles
        res.status(200).json(faculty); // Sending back articles data as response
    } catch (error) {
        console.error('Error reading faculty.json:', error);
        res.status(500).json({ message: 'Error reading data' });
    }
}
