import { useContext } from 'react';
import { formatDistance } from 'date-fns';
import { ScrapeContext } from './ScrapeContext';

const Data = () => {
    const { scrapes } = useContext(ScrapeContext);
    console.log(scrapes)
    return (
        <>
            <div>
                <h2>Your Data:</h2>
                <ul>
                    {scrapes.instagram.map(scrape => (
                    <li key={scrape.date}>
                        {scrape.count}-{formatDistance(new Date(scrape.date), new Date())}
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Data;