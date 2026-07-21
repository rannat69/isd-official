import { NewsEntry } from '@/lib/newsFilter';
import { useEffect, useState } from 'react';

type Props = {
    editNews: (id: number) => Promise<void>;
};

export default function ListNews({ editNews }: Props) {
    const [newsList, setNewsList] = useState<NewsEntry[]>([]);

    const fetchNews = async () => {
        const data = await fetch('/api/news/allNews', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate the content type of the body
            },
        });

        const news = await data.json();

        // Sort by date desc
        news.sort((a: NewsEntry, b: NewsEntry) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        if (data.ok) {
            setNewsList(news);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);



    async function deleteNews(id: number): Promise<void> {
        // Show confirmation dialog
        const userConfirmed = confirm(
            'Are you sure you want to delete this news item?'
        );

        if (!userConfirmed) {
            return; // Exit if the user selects "No"
        }

        // Proceed with the deletion if user confirms
        const response = await fetch('/api/news/deleteNews', {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate the content type of the body
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            alert('News item deleted successfully.'); // Optional: Notify the user of success
        } else {
            alert('Error deleting the news item.'); // Optional: Notify the user of failure
        }

        fetchNews();
    }

    return (
        <div className="flex flex-col w-1/2">
            {newsList.map((news) => (
                <div className="flex " key={news.id}>
                    <div className="flex-shrink-0 w-1/3">{news.title}</div>

                    <div className="flex-shrink-0 w-1/3">{news.date}</div>
                    <div
                        className="flex-shrink-0 w-1/12 text-center text-red-500 font-bold border-1 border-black cursor-pointer"
                        onClick={() => editNews(news.id)}
                    >
                        Edit
                    </div>
                    <div
                        className="flex-shrink-0 w-1/12 text-center text-red-500 font-bold cursor-pointer"
                        onClick={() => deleteNews(news.id)}
                    >
                        X
                    </div>
                </div>
            ))}
        </div>
    );
}
