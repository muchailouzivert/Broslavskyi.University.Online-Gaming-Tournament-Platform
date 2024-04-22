import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const LatestEvents = () => {
    const [latestEvents, setLatestEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events/latest')
            .then(res => {
                setLatestEvents(res.data);
            })
            .catch(error => {
                console.error('Error fetching latest events:', error);
            });
    }, []);

    return (
        <div>
            <h1>Latest Events</h1>
            <ul>
                {latestEvents.map(event => (
                    <li key={event._id}>
                        {event.eventType === 'tournament creation' && (
                            <p>{`Tournament "${event.eventName}" has been created by User`}</p>
                        )}
                        {event.eventType === 'league change' && (
                            <p>{`User changed its league to "${event.leagueName}"`}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};