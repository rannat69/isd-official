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

    const form = new IncomingForm({
        maxFileSize: 10 * 1024 * 1024, // 10 MB, for example
    });
    const parsedForm = await form.parse(req);

    console.log('parsedForm', parsedForm);

    const fields = parsedForm[0];
    const files = parsedForm[1];

    const typeArray = fields.type;
    const photoArray = files.photo;

    if (
        !typeArray ||
        !photoArray ||
        typeArray.length === 0 ||
        photoArray.length === 0
    ) {
        res.status(400).json({ message: 'Missing type or file' });
        return;
    }

    const type = typeArray[0];
    const file = photoArray[0];

    const newPath = path.join(
        process.cwd(),
        'public/pictures/' + type,
        file.originalFilename ?? 'upload'
    );

    console.log('file.filepath', file.filepath);
    console.log('newPath', newPath);

    await fs.promises.rename(file.filepath, newPath);
    res.status(200).json(true); // Sending back articles data as response
}
