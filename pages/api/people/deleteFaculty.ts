import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
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

        // Get the id to delete
        const idToDelete = req.body.id;
        console.log('req body.id', idToDelete);

        // Filter out the article with the specified id
        const updatedFac = faculty.filter((fac) => fac.id !== idToDelete);

        // Write the updated articles back to the JSON file
        fs.writeFileSync(dataPath, JSON.stringify(updatedFac, null, 2)); // Pretty print with 2 spaces

        // Respond with a success message
        res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
        console.error('Error reading articles.json:', error);
        res.status(500).json({ message: 'Error reading data' });
    }
}
