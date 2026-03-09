'use client';

import React, { useEffect, useState } from 'react';

export default function Dashboard() {



    const [user, setUser] = useState<{ username: string } | null>(null);

    useEffect(() => {
        // Call an API that reads the server-side session from the cookie

        fetch('/api/hello', { credentials: 'include' })
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Log the result
            })
            .catch((error) => {
                console.error('Error fetching data:', error); // Log any errors
            });

        fetch('/api/cas/me', { credentials: 'include' })
            .then((res) => res.json())
            .then((data) => setUser(data.user))
            .catch(() => {});
    }, []);

    const handleLogin = () => {
        // Redirect to your login endpoint
        fetch('/api/cas/login', {
            method: 'POST', // Change to POST
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json', // Set content type
            },
            body: JSON.stringify({}), // Empty body
        })
            .then((res) => res.json())
            .then((data) => setUser(data.user))
            .catch(() => {});
    };

    if (!user) {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>You are not logged in.</p>
                <button onClick={handleLogin}>Login with CAS</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>You are authenticated via CAS.</p>
        </div>
    );
}
