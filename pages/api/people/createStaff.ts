import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), '/pages/api/staff.json');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.method);

    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    console.log('req.body', req.body);

    try {
        // Read articles.json
        const data = fs.readFileSync(dataPath, 'utf8');
        const staff = JSON.parse(data);

        // Append the new article
        const newArticle = {
            id: staff.length + 1,
            name: req.body.name,
            surname: req.body.surname,
            role: req.body.role,
            email: req.body.email,
            phone: req.body.phone,
            location: req.body.location,
        };
        staff.push(newArticle);

        // Write the updated articles back to the JSON file
        fs.writeFileSync(dataPath, JSON.stringify(staff, null, 2)); // Pretty print with 2 spaces

        // Process your data here (e.g., modify articles or add new ones)
        // Assuming you want to return the articles
        res.status(200).json(true); // Sending back articles data as response
    } catch (error) {
        console.error('Error reading articles.json:', error);
        res.status(500).json({ message: 'Error reading data' });
    }
}
