import { NewsEntry } from '@/lib/newsFilter';
import { Person } from '@/lib/peopleFilter';
import { useEffect, useState } from 'react';
export default function ListNews() {
    const [facultyList, setFacultyList] = useState<Person[]>([]);
    const fetchFaculty = async () => {
        const data = await fetch('/api/people/allFaculty', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate the content type of the body
            },
        });

        const faculty = await data.json();

        // Sort by date desc
        faculty.sort((a: Person, b: Person) => {});

        if (data.ok) {
            setFacultyList(faculty);
        }
    };
    useEffect(() => {
        fetchFaculty();
    }, []);

    async function deleteFaculty(id: number): Promise<void> {
        // Show confirmation dialog
        const userConfirmed = confirm(
            'Are you sure you want to delete this faculty item?'
        );

        if (!userConfirmed) {
            return; // Exit if the user selects "No"
        }

        // Proceed with the deletion if user confirms
        const response = await fetch('/api/people/deleteFaculty', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate the content type of the body
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            alert('faculty item deleted successfully.'); // Optional: Notify the user of success
        } else {
            alert('Error deleting the faculty item.'); // Optional: Notify the user of failure
        }

        fetchFaculty();
    }

    return (
        <div className="flex flex-col w-1/2">
            {facultyList.map((faculty) => (
                <div className="flex " key={faculty.id}>
                    <div className="flex-shrink-0 w-1/3">{faculty.name}</div>

                    <div
                        className="flex-shrink-0 w-1/12 text-center text-red-500 font-bold cursor-pointer"
                        onClick={() => deleteFaculty(faculty.id)}
                    >
                        X
                    </div>
                </div>
            ))}
        </div>
    );
}
