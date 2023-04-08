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
        {
            name: 'Page 4',
            clicks: 300,
            clickRate: '10%'
        },
        {
            name: 'Page 5',
            clicks: 150,
            clickRate: '20%'
        },
        {
            name: 'Page 6',
            clicks: 75,
            clickRate: '7.5%'
        },
        {
            name: 'Page 7',
            clicks: 90,
            clickRate: '12%'
        },
        {
            name: 'Page 8',
            clicks: 250,
            clickRate: '15%'
        },
        {
            name: 'Page 9',
            clicks: 80,
            clickRate: '5%'
        },
        {
            name: 'Page 10',
            clicks: 150,
            clickRate: '20%'
        },
        {
            name: 'Page 11',
            clicks: 200,
            clickRate: '25%'
        },
        {
            name: 'Page 12',
            clicks: 120,
            clickRate: '12%'
        },
        {
            name: 'Page 13',
            clicks: 70,
            clickRate: '7%'
        },
        {
            name: 'Page 14',
            clicks: 90,
            clickRate: '11%'
        },
        {
            name: 'Page 15',
            clicks: 100,
            clickRate: '8%'
        },
        {
            name: 'Page 16',
            clicks: 220,
            clickRate: '22%'
        },
        {
            name: 'Page 17',
            clicks: 80,
            clickRate: '4%'
        },
        {
            name: 'Page 18',
            clicks: 150,
            clickRate: '10%'
        },
        {
            name: 'Page 19',
            clicks: 50,
            clickRate: '3%'
        },
        {
            name: 'Page 20',
            clicks: 130,
            clickRate: '13%'
        },
        {
            name: 'Page 21',
            clicks: 180,
            clickRate: '18%'
        },
        {
            name: 'Page 22',
            clicks: 90,
            clickRate: '9%'
        },
        {
            name: 'Page 23',
            clicks: 70,
            clickRate: '7%'
        },
        {
            name: 'Page 24',
            clicks: 200,
            clickRate: '20%'
        },
        {
            name: 'Page 25',
            clicks: 120,
            clickRate: '12%'
        },
        {
            name: 'Page 26',
            clicks: 40,
            clickRate: '4%'
        },
        {
            name: 'Page 27',
            clicks: 300,
            clickRate: '30%'
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
