import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false, // Important: Disable the default body parsing
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.method);

    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const form = new IncomingForm();

    const toto = await form.parse(req);

    const type = toto[0].type[0];
    const file = toto[1].photo[0];

    console.log('type', type);

    const newPath = path.join(
        process.cwd(),
        'public/pictures/' + type,
        file.originalFilename
    );

    console.log('file.filepath', file.filepath);

    console.log('newPath', newPath);

    fs.promises.rename(file.filepath, newPath);

    res.status(200).json(true); // Sending back articles data as response
}
