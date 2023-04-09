import React, { useState, useEffect } from 'react';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('bearerToken');
        fetch('http://127.0.0.1:8000/api/buttons/analytics', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(data => setAnalyticsData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Clicks</th>
                    <th scope="col">Click Rate</th>
                </tr>
            </thead>
            <tbody>
                {analyticsData.map((data, id) => (
                    <tr key={id}>
                        <td>{data.name}</td>
                        <td>{data.clicks}</td>
                        <td>{data.clickRate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Analytics;
