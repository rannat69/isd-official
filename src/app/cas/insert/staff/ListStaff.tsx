import { NewsEntry } from '@/lib/newsFilter';
import { Person } from '@/lib/peopleFilter';
import { useEffect, useState } from 'react';
export default function ListNews() {
    const [staffList, setStaffList] = useState<Person[]>([]);
    const fetchStaff = async () => {
        const data = await fetch('/api/people/allStaff', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate the content type of the body
            },
        });

        const staff = await data.json();

        // Sort by date desc
        staff.sort((a: Person, b: Person) => {});

        if (data.ok) {
            setStaffList(staff);
        }
    };
    useEffect(() => {
        fetchStaff();
    }, []);

    async function deleteStaff(id: number): Promise<void> {
        // Show confirmation dialog
        const userConfirmed = confirm(
            'Are you sure you want to delete this news item?'
        );

        if (!userConfirmed) {
            return; // Exit if the user selects "No"
        }

        // Proceed with the deletion if user confirms
        const response = await fetch('/api/people/deleteStaff', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate the content type of the body
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            alert('Staff item deleted successfully.'); // Optional: Notify the user of success
        } else {
            alert('Error deleting the Staff item.'); // Optional: Notify the user of failure
        }

        fetchStaff();
    }

    return (
        <div className="flex flex-col w-1/2">
            {staffList.map((staff) => (
                <div className="flex " key={staff.id}>
                    <div className="flex-shrink-0 w-1/3">{staff.name}</div>

                    <div
                        className="flex-shrink-0 w-1/12 text-center text-red-500 font-bold cursor-pointer"
                        onClick={() => deleteStaff(staff.id)}
                    >
                        X
                    </div>
                </div>
            ))}
        </div>
    );
}
