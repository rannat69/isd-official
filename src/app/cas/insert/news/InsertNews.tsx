'use client';

import { useEffect, useState } from 'react';

export default function InsertNews() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');
    const [evtTime, setEvtTime] = useState('');
    const [evtDate, setEvtDate] = useState('');
    const [evtLocation, setEvtLocation] = useState('');

    const [photos, setPhotos] = useState<File[]>();
    const [photoFilenames, setPhotoFilenames] = useState<string[]>([]);
    const [type, setType] = useState('news');
    useEffect(() => {}, []);

    const handlePictureChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = event.target.files;
        if (files) {
            console.log('files', files[0]);
            setPhotos(Array.from(files));

            const photoFilenamesTemp: string[] = [];

            for (const file of files) {
                console.log('file', file.name);

                photoFilenamesTemp.push(file.name);
            }

            setPhotoFilenames(photoFilenamesTemp);
        }
    };

    const handleCreate = async () => {
        //

        console.log('handle upload pre');
        if (!photos) {
            alert('Please select a picture first.');
            return;
        }

        if (!date) {
            alert('Please select a date first.');
            return;
        }

        if (!title || title.length === 0) {
            alert('Please enter a title first.');
            return;
        }

        if (!details || details.length === 0) {
            alert('Please enter details first.');
            return;
        }

        console.log('handle upload', photos);

        for (const photo of photos) {
            const formData = new FormData();
            formData.append('photo', photo);

            formData.append('type', 'news');

            const responseUpload = await fetch('/api/uploadPicture', {
                method: 'POST',
                body: formData,
            });

            console.log('handleUpload response', responseUpload);

            if (responseUpload.ok) {
                console.log('File uploaded successfully!');
            } else {
                alert('Error uploading file.');
            }
        }

        // convert evtDate to yyyy-mm-dd
        let evtDateFormatted = '';
        if (evtDate === '') {
            setEvtDate(date);
        } else {
            const evtDateTemp = new Date(evtDate);

            evtDateFormatted = evtDateTemp.toISOString().split('T')[0];
        }
        // convert date to yyyy-mm-dd

        const dateTemp = new Date(date);

        const dateFormatted = dateTemp.toISOString().split('T')[0];

        const newNews = {
            title,
            details,
            photoFilenames,
            dateFormatted,
            evtDateFormatted,
            evtTime,
            evtLocation,
            type,
        };

        const response = await fetch('/api/news/createNews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNews), // Send FormData
        });

        if (response.ok) {
            console.log('Faculty created');
            alert('Entry created.');
            // Optionally, reset fields
            setTitle('');
            setDetails('');
            setPhotoFilenames([]);
            setPhotos([]);
            setDate('');
            setEvtDate('');
            setEvtTime('');
            setEvtLocation('');
        } else {
            console.error('Failed to create faculty');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center gap-2">
            <p>Date</p>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            ></input>
            Title
            <input
                className="border-1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            Details
            <textarea
                id="longText"
                name="userText"
                rows={10}
                cols={50}
                placeholder="Enter description here.  # title..."
                className="border-1"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
            ></textarea>
            Picture
            <input
                className="border-1"
                type="file"
                onChange={handlePictureChange}
                multiple
            ></input>
            <div>
                <p>Type</p>

                <label key="News">
                    <input
                        type="radio"
                        value="news"
                        checked={type === 'news'}
                        onChange={(e) => setType(e.target.value)}
                    />
                    News
                </label>

                <label key="Events">
                    <input
                        type="radio"
                        value="events"
                        checked={type === 'events'}
                        onChange={(e) => setType(e.target.value)}
                    />
                    Events
                </label>
            </div>
            {type === 'events' && (
                <>
                    <p>Event Date</p>
                    <input
                        type="date"
                        value={evtDate}
                        onChange={(e) => setEvtDate(e.target.value)}
                    ></input>

                    <p>Event Time</p>
                    <input
                        className="border-1"
                        value={evtTime}
                        onChange={(e) => setEvtTime(e.target.value)}
                    />

                    <p>Event Location</p>
                    <input
                        className="border-1"
                        value={evtLocation}
                        onChange={(e) => setEvtLocation(e.target.value)}
                    />
                </>
            )}
            <button
                className="border-1 rounded-xl p-2 hover:bg-gray-200"
                onClick={handleCreate}
            >
                Create
            </button>
        </div>
    );
}
