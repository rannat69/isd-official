import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Ensure the method is GET
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Extract parameters from the query string
    const { type, filename } = req.query;

    // Validate parameters
    if (!type || !filename) {
        return res
            .status(400)
            .json({ message: 'Type and filename are required' });
    }

    // Construct the file path
    const filePath = path.join(
        process.cwd(),
        'public/',

        Array.isArray(filename) ? filename[0] : filename
    );

    // Check if the file exists
    fs.stat(filePath, (err) => {
        if (err) {
            return res
                .status(404)
                .json({ message: 'File  not found : ' + filePath });
        }

        // Set the appropriate content type and send the file
        res.setHeader('Content-Type', 'image/jpeg'); // Adjust this based on your image type
        const imageStream = fs.createReadStream(filePath);
        imageStream.pipe(res);
    });
}
