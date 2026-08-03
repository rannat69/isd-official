'use client';

import { useEffect, useState } from 'react';

type Props = {
    newsToEdit;
    editMode: boolean;
};

type UrlPicture = {
    url: string;
    filename;
};

export default function InsertNews({ newsToEdit, editMode }: Props) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');
    const [evtTime, setEvtTime] = useState('');
    const [evtDate, setEvtDate] = useState('');
    const [evtLocation, setEvtLocation] = useState('');

    const [photos, setPhotos] = useState<File[]>();
    const [photosURL, setPhotosURL] = useState<UrlPicture[]>([]);
    const [photoFilenames, setPhotoFilenames] = useState<string[]>([]);
    const [type, setType] = useState('news');
    useEffect(() => {
        setPhotos([]);
        setPhotosURL([]);
        setPhotoFilenames([]);

        const photosURLTemp: UrlPicture[] = [];
        const photosFilenamesTemp: string[] = [];

        if (newsToEdit) {
            setTitle(newsToEdit.title);
            setDate(newsToEdit.date);
            setDetails(newsToEdit.details);
            setPhotoFilenames(newsToEdit.pictures);
            setType(newsToEdit.type);
            setEvtTime(newsToEdit.evt_time);
            setEvtDate(newsToEdit.evt_date);
            setEvtLocation(newsToEdit.evt_location);

            for (const photo of newsToEdit.pictures) {
                let fileUrl = '';

                if (photo.includes('/pictures')) {
                    fileUrl = photo;
                } else {
                    fileUrl = `/pictures/news/${photo}`;
                }

                const url: UrlPicture = { url: fileUrl, filename: photo };

                photosURLTemp.push(url);
                photosFilenamesTemp.push(fileUrl);
            }

            console.log('photosURL', photosURLTemp);
            console.log('photosFilenamesTemp', photosFilenamesTemp);

            setPhotosURL(photosURLTemp);
            setPhotoFilenames(photosFilenamesTemp);
        }
    }, [newsToEdit]);

    const handlePictureChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = event.target.files;
        if (files) {
            console.log('files', files[0]);
            setPhotos(Array.from(files));

            const fileArray = Array.from(files);

            for (const file of fileArray) {
                const fileUrl = URL.createObjectURL(file);
                const fileName = file.name;

                const url = { url: fileUrl, filename: fileName };

                photosURL.push(url);
            }

            setPhotosURL([...photosURL]);

            //const photoFilenamesTemp: string[] = [];

            for (const file of files) {
                console.log('file', file.name);

                photoFilenames.push(file.name);
            }

            console.log('photo filenames', photoFilenames);

            setPhotoFilenames([...photoFilenames]);
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

            setDate('');
            setEvtDate('');
            setEvtTime('');
            setEvtLocation('');
            setPhotos([]);
            setPhotosURL([]);
            setPhotoFilenames([]);
        } else {
            console.error('Failed to create faculty');
        }
    };

    const handleUpdate = async () => {
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

        // Delete existing, then recreate

        const responseDelete = await fetch('/api/news/deleteNews', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate the content type of the body
            },
            body: JSON.stringify({ id: newsToEdit.id }),
        });

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

        console.log('update photoFilenames', photoFilenames);

        const response = await fetch('/api/news/createNews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNews), // Send FormData
        });

        if (response.ok) {
            console.log('Entry updated');
            alert('Entry updated.');
            // Optionally, reset fields
            setTitle('');
            setDetails('');
            setPhotos([]);
            setPhotosURL([]);
            setPhotoFilenames([]);
            setDate('');
            setEvtDate('');
            setEvtTime('');
            setEvtLocation('');
        } else {
            console.error('Failed to create faculty');
        }
    };

    function removePicture(filename: string): void {
        console.log('removePicture', filename);

        console.log('photoFilenames', photoFilenames);

        setPhotoFilenames([
            ...photoFilenames.filter((value) => value !== filename),
        ]);

        setPhotosURL([
            ...photosURL.filter((value) => value.filename !== filename),
        ]);
    }

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
                placeholder="Enter description here.  # title... bold = <strong>xxx</strong>"
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
            {editMode ? (
                <button
                    className="border-1 rounded-xl p-2 hover:bg-gray-200"
                    onClick={handleUpdate}
                >
                    Update
                </button>
            ) : (
                <button
                    className="border-1 rounded-xl p-2 hover:bg-gray-200"
                    onClick={handleCreate}
                >
                    Create
                </button>
            )}
            {photosURL.length > 0 && (
                <div>
                    <p>Selected Images:</p>
                    {photosURL.map((file, index) => (
                        <div key={index}>
                            <div
                                className="border-1 border-black text-center text-red-500 cursor-pointer font-bold"
                                onClick={() => removePicture(file.filename)}
                            >
                                Remove picture
                            </div>
                            <p key={index}>{file.filename}</p>

                            {file.filename.includes('/pictures') ? (
                                <img
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                    }}
                                    src={file.filename}
                                ></img>
                            ) : (
                                <img
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                    }}
                                    src={file.url}
                                ></img>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
