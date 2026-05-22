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
        // Read articles.json
        const data = fs.readFileSync(dataPath, 'utf8');
        const faculty = JSON.parse(data);

        // find max id in faculty and do +1
        const maxId = faculty.reduce((max: number, article: { id: number }) => {
            return article.id > max ? article.id : max;
        }, 0);

        // Append the new article

        console.log('req body', req.body);

        const photoTemp: string[] = [];

        // create folder name with date yyyymmdd
        const date = new Date();
        const folderName =
            date.getFullYear().toString() +
            (date.getMonth() + 1).toString().padStart(2, '0') +
            date.getDate().toString().padStart(2, '0');

        for (const filename of req.body.photoFilenames) {
            photoTemp.push('/pictures/news/' + folderName + '/' + filename);
        }

        const formattedDetails = req.body.details.replaceAll('\n', ' \n ');

        const newNews = {
            id: maxId + 1,
            date: req.body.dateFormatted,
            evt_date: req.body.evtDateFormatted,
            evt_time: req.body.evtTime,
            evt_location: req.body.evtLocation,
            title: req.body.title,
            details: formattedDetails,
            pictures: photoTemp,
            type: req.body.type,
        };
        faculty.push(newNews);

        // Write the updated articles back to the JSON file
        fs.writeFileSync(dataPath, JSON.stringify(faculty, null, 2)); // Pretty print with 2 spaces

        // Process your data here (e.g., modify articles or add new ones)
        // Assuming you want to return the articles
        res.status(200).json(true); // Sending back articles data as response
    } catch (error) {
        console.error('Error reading articles.json:', error);
        res.status(500).json({ message: 'Error reading data' });
    }
}
