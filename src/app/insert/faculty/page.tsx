'use client';

import { useEffect, useState } from 'react';

export default function InsertFaculty() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');

    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [keywords, setKeywords] = useState<string[]>([]);
    const [currentKeyword, setCurrentKeyword] = useState('');

    const [photo, setPhoto] = useState<File | null>();
    const [photoFilename, setPhotoFilename] = useState('');

    const [tag, setTag] = useState('');

    const [area, setArea] = useState('');

    const [details, setDetails] = useState('');

    const tags = [
        'joint_appointment',
        'research_track',
        'affiliate',
        'emeritus',
        'adjunct',
        'regular',
        'teaching_track',
    ];

    const areasList = [
        'health_tech',
        'sustainable_tech',
        'design_tech',
        'marine_tech',
    ];

    useEffect(() => {
        // Fetch articles as needed
    }, []);

    const handleAddKeyword = () => {
        if (currentKeyword) {
            setKeywords([...keywords, currentKeyword]);
            setCurrentKeyword('');
        }
    };

    const handlePictureChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = event.target.files;
        if (files) {
            console.log('files', files[0]);
            setPhoto(files[0]);
            setPhotoFilename(files[0].name);
        }
    };

    const handleCreate = async () => {
        //

        console.log('handle upload pre');
        if (!photo) {
            alert('Please select a picture first.');
            return;
        }

        if (!name || name.length === 0) {
            alert('Please enter a name.');
            return;
        }

        if (!role || role.length === 0) {
            alert('Please enter a role.');
            return;
        }

        if (!tag || tag.length === 0) {
            alert('Please select a tag.');
            return;
        }

        const formData = new FormData();
        formData.append('photo', photo);

        formData.append('type', 'people');

        const responseUpload = await fetch('/api/uploadPicture', {
            method: 'POST',
            body: formData,
        });

        console.log('handleUpload response', responseUpload);

        if (responseUpload.ok) {
            console.log('File uploaded successfully!');
            setPhoto(null); // Clear selected file
        } else {
            alert('Error uploading file.');
        }

        const newFaculty = {
            name,
            surname,
            role,
            email,
            phone,
            link,
            location,
            keywords,
            // Note: To send pictures, you usually use FormData
            photoFilename, // This requires special handling below
            area,
            tag,
            details,
        };

        const response = await fetch('/api/people/createFaculty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFaculty), // Send FormData
        });

        if (response.ok) {
            console.log('Faculty created');
            alert('Faculty member created.');
            // Optionally, reset fields
            setName('');
            setSurname('');
            setRole('');
            setEmail('');
            setPhone('');
            setLocation('');
            setKeywords([]);
            setPhotoFilename('');
            setTag('');
            setArea('');
            setDetails('');
            setLink('');
        } else {
            console.error('Failed to create faculty');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center gap-2">
            Full Name
            <input
                className="border-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            Surname
            <input
                className="border-1"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            Role
            <input
                className="border-1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            Email
            <input
                className="border-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />{' '}
            Link
            <input
                className="border-1"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            Phone
            <input
                className="border-1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            Location
            <input
                className="border-1"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            Keywords
            <input
                className="border-1"
                value={currentKeyword}
                onChange={(e) => setCurrentKeyword(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddKeyword();
                        e.preventDefault();
                    }
                }}
            />
            <button onClick={handleAddKeyword}>Add Keyword</button>
            <div>
                {keywords.map((k, index) => (
                    <span key={index} className="m-1">
                        {k}
                    </span>
                ))}
            </div>
            Details
            <textarea
                id="longText"
                name="userText"
                rows={10}
                cols={50}
                placeholder="Enter description here. **bold** ..."
                className="border-1"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
            ></textarea>
            Picture
            <input
                className="border-1"
                type="file"
                onChange={handlePictureChange}
            ></input>
            <div>
                <p>Tags</p>
                {tags.map((tagOption) => (
                    <label key={tagOption}>
                        <input
                            type="radio"
                            value={tagOption}
                            checked={tag === tagOption}
                            onChange={(e) => setTag(e.target.value)}
                        />
                        {tagOption}
                    </label>
                ))}
            </div>
            <div>
                <p>Areas</p>
                {areasList.map((areaOption) => (
                    <label key={areaOption}>
                        <input
                            type="radio"
                            value={areaOption}
                            checked={area === areaOption}
                            onChange={(e) => setArea(e.target.value)}
                        />
                        {areaOption}
                    </label>
                ))}
            </div>
            <button
                className="border-1 rounded-xl p-2 hover:bg-gray-200"
                onClick={handleCreate}
            >
                Create
            </button>
        </div>
    );
}
