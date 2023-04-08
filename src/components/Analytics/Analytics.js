import React, { useState } from 'react';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([
        {
            name: 'Page 1',
            clicks: 200,
            clickRate: '5%'
        },
        {
            name: 'Page 2',
            clicks: 100,
            clickRate: '25%'
        },
        {
            name: 'Page 3',
            clicks: 50,
            clickRate: '15%'
        },
    ]);

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
                {analyticsData.map((data, index) => (
                    <tr key={index}>
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
