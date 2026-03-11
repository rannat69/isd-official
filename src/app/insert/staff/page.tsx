'use client';

import { useEffect, useState } from 'react';

export default function InsertStaff() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        // Fetch initial articles if needed
    }, []);

    const handleCreate = async () => {
        const newStaff = {
            name,
            surname,
            role,
            email,
            phone,
            location,
        };

        const response = await fetch('/api/people/createStaff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStaff), // Pass the new staff data
        });

        if (response.ok) {
            console.log('Staff created');
            // Optionally, reset the input fields
            setName('');
            setSurname('');
            setRole('');
            setEmail('');
            setPhone('');
            setLocation('');
            // Fetch updated articles
        } else {
            console.error('Failed to create staff');
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
            <button
                className="border-1 rounded-xl p-2 hover:bg-gray-200"
                onClick={handleCreate}
            >
                Create
            </button>
        </div>
    );
}
