'use client';

import React, { useEffect, useState } from 'react';
import InsertNews from '../insert/news/page';
import InsertFaculty from '../insert/faculty/page';
import InsertStaff from '../insert/staff/page';

export default function Dashboard() {
    const [user, setUser] = useState<string>('');

    const [mode, setMode] = useState<string>('');

    useEffect(() => {
        console.log('useEffect');

        // Check for the ?ticket in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const ticket = urlParams.get('ticket'); // Get the value of the ticket parameter

        if (ticket) {
            console.log('Ticket found:', ticket); // Log the ticket if present
            // Optionally, you can perform actions based on the ticket

            fetch('/api/cas/serviceValidate', {
                method: 'POST', // Specify the method as POST
                credentials: 'include', // Include credentials
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify({ ticket }), // Stringify the body object
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.message);

                    // Function to parse the XML and extract needed values
                    function extractUserInfo(xml: string) {
                        const parser = new DOMParser();
                        const xmlDoc = parser.parseFromString(
                            xml,
                            'application/xml'
                        );

                        console.log(
                            'xmlDoc',
                            xmlDoc.getElementsByTagName('cas:name')
                        );

                        // Extract values using the appropriate tags
                        const name =
                            xmlDoc.getElementsByTagName('cas:name')[0]
                                .textContent;
                        const email =
                            xmlDoc.getElementsByTagName('cas:mail')[0]
                                .textContent;
                        const departmentNumber = xmlDoc.getElementsByTagName(
                            'cas:departmentNumber'
                        )[0].textContent;

                        // Extract all eduPersonAffiliation tags
                        const eduPersonAffiliations = Array.from(
                            xmlDoc.getElementsByTagName(
                                'cas:eduPersonAffiliation'
                            )
                        ).map((elem) => elem.textContent);

                        return {
                            name,
                            email,
                            departmentNumber,
                            eduPersonAffiliations,
                        };
                    }

                    // Call the function and log the result
                    const userInfo = extractUserInfo(data.message);
                    
                    console.log(userInfo);

                    setUser(userInfo.email);
                })
                .catch((error) => {
                    console.error('Error:', error); // Log any errors
                });
        } else {
            location.href =
                'https://cas.ust.hk/cas/login?service=' +
                process.env.NEXT_PUBLIC_BASE_URL +
                '/cas';
        }
    }, []);

    const handleLogin = () => {
        // Redirect to your login endpoint/*
        /* fetch(
            'https://cas.ust.hk/cas/login?service=https://isd.hkust.edu.hk/cas',
            {
                method: 'GET', // Change to POST
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json', // Set content type
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setUser(data.user))
           .catch(() => {});*/
        // Redirect page
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
            <h1>Welcome, {user}</h1>
            <p>You are authenticated via CAS.</p>

            <div className="flex gap-3 m-[20px]">
                <button
                    className=" text-isd-primary cursor-pointer p-4 bg-isd-primary-2  items-center justify-center"
                    onClick={() => setMode('faculty')}
                >
                    Faculty
                </button>
                <button
                    className=" text-isd-primary cursor-pointer p-4 bg-isd-primary-2  items-center justify-center"
                    onClick={() => setMode('staff')}
                >
                    Staff
                </button>
                <button
                    className=" text-isd-primary cursor-pointer p-4 bg-isd-primary-2  items-center justify-center"
                    onClick={() => setMode('news')}
                >
                    News and Events
                </button>
            </div>

            {mode === 'people' && (
                <div className="flex gap-3 m-[20px]">
                    <h1>People</h1>
                </div>
            )}

            {mode === 'faculty' && <InsertFaculty></InsertFaculty>}
            {mode === 'staff' && <InsertStaff></InsertStaff>}
            {mode === 'news' && (
                <>
                    <h1>News and Events</h1>
                    <InsertNews></InsertNews>
                </>
            )}
        </div>
    );
}
