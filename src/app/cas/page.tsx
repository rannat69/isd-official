'use client';

import React, { useCallback, useEffect, useState } from 'react';
import InsertNews from './insert/news/InsertNews';
import InsertFaculty from './insert/faculty/InsertFaculty';
import InsertStaff from './insert/staff/InsertStaff';
import ListNews from './insert/news/ListNews';
import ListFaculty from './insert/faculty/ListFaculty';
import ListStaff from './insert/staff/ListStaff';

export default function Dashboard() {
    const [user, setUser] = useState<string>('');

    const [mode, setMode] = useState<string>('');

    const [newsToEdit, setNewsToEdit] = useState<any>(null);

    const [editMode, setEditMode] = useState<any>(false);

    const authorisedUsers = ['remia', 'atomyuen', 'janet.liu'];

    const editNews = useCallback(async (id: number): Promise<void> => {
        console.log('id', id);

        const response = await fetch('/api/news/getNews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        const newsEdit = await response.json();

        console.log('newsEdit', newsEdit);

        setNewsToEdit(newsEdit[0]);
        setEditMode(true);
    }, []);

    useEffect(() => {
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
                .then(async (res) => {
                    const text = await res.text();
                    console.log('HTTP status:', res.status);
                    console.log('Response headers:', [
                        ...res.headers.entries(),
                    ]);
                    console.log('Raw response body:', text);

                    try {
                        return JSON.parse(text);
                    } catch (e) {
                        console.error('Failed to parse JSON. Body was:', text);
                        throw e;
                    }
                })
                .then((data) => {
                    console.log(data.message);

                    // Function to parse the XML and extract needed values
                    function extractUserInfo(xml: string) {
                        const parser = new DOMParser();
                        const xmlDoc = parser.parseFromString(
                            xml,
                            'application/xml'
                        );

                        // Extract values using the appropriate tags
                        const userElement =
                            xmlDoc.getElementsByTagName('cas:user')[0];
                        const nameElement =
                            xmlDoc.getElementsByTagName('cas:name')[0];
                        const emailElement =
                            xmlDoc.getElementsByTagName('cas:mail')[0];
                        const departmentNumberElement =
                            xmlDoc.getElementsByTagName(
                                'cas:departmentNumber'
                            )[0];

                        // Initialize variables
                        let userTemp: string = '';
                        let name: string = '';
                        let email: string = '';
                        let departmentNumber: string = '';

                        // Check and assign textContent if elements are found
                        if (userElement) {
                            userTemp = userElement.textContent;
                        } else {
                            console.warn('User element not found.');
                        }

                        if (nameElement) {
                            name = nameElement.textContent;
                        } else {
                            console.warn('Name element not found.');
                        }

                        if (emailElement) {
                            email = emailElement.textContent;
                        } else {
                            console.warn('Email element not found.');
                        }

                        if (departmentNumberElement) {
                            departmentNumber =
                                departmentNumberElement.textContent;
                        } else {
                            console.warn(
                                'Department number element not found.'
                            );
                        }

                        // Extract all eduPersonAffiliation tags
                        const eduPersonAffiliations = Array.from(
                            xmlDoc.getElementsByTagName(
                                'cas:eduPersonAffiliation'
                            )
                        ).map((elem) => elem.textContent);

                        return {
                            userTemp,
                            name,
                            email,
                            departmentNumber,
                            eduPersonAffiliations,
                        };
                    }

                    // Call the function and log the result
                    const userInfo = extractUserInfo(data.message);

                    console.log(userInfo);

                    if (
                        userInfo.userTemp &&
                        authorisedUsers.includes(userInfo.userTemp)
                    ) {
                        setUser(userInfo.userTemp || 'Unknown user');

                        history.replaceState(
                            { key: 'value' },
                            'Title',
                            process.env.NEXT_PUBLIC_BASE_URL + '/cas'
                        );
                    } else {
                        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
                        location.href = baseUrl;
                    }
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

    if (!user) {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>You are not logged in.</p>
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
                    onClick={() => {
                        setMode('faculty');
                        setNewsToEdit(null);
                        setEditMode(false);
                    }}
                >
                    Faculty
                </button>
                <button
                    className=" text-isd-primary cursor-pointer p-4 bg-isd-primary-2  items-center justify-center"
                    onClick={() => {
                        setMode('staff');
                        setNewsToEdit(null);
                        setEditMode(false);
                    }}
                >
                    Staff
                </button>
                <button
                    className=" text-isd-primary cursor-pointer p-4 bg-isd-primary-2  items-center justify-center"
                    onClick={() => {
                        setMode('news');
                        setNewsToEdit(null);
                        setEditMode(false);
                    }}
                >
                    News and Events
                </button>
            </div>

            {mode === 'people' && (
                <div className="flex gap-3 m-[20px]">
                    <h1>People</h1>
                </div>
            )}

            {mode === 'faculty' && (
                <>
                    <h1>Faculty</h1>
                    <div className="flex gap-3 m-[20px]">
                        <ListFaculty></ListFaculty>
                        <InsertFaculty></InsertFaculty>
                    </div>
                </>
            )}
            {mode === 'staff' && (
                <>
                    <h1>Staff</h1>
                    <div className="flex gap-3 m-[20px]">
                        <ListStaff></ListStaff>
                        <InsertStaff></InsertStaff>{' '}
                    </div>
                </>
            )}
            {mode === 'news' && (
                <>
                    <h1>News and Events</h1>
                    <div className="flex gap-3 m-[20px]">
                        <ListNews editNews={editNews}></ListNews>
                        <InsertNews
                            newsToEdit={newsToEdit}
                            editMode={editMode}
                        ></InsertNews>
                    </div>
                </>
            )}
        </div>
    );
}
