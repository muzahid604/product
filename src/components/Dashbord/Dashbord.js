import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashbord.css';
const Dashbord = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const lodedData = data.data;
                setData(lodedData)
            })
    }, []
    )

    return (
        <div className='charts'>
            <div><h4>Month Wise Investments</h4>
                <BarChart
                    width={450}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="investment" fill="#8884d8" />
                </BarChart></div>
            <div>
                <h4>Month Wise Sells</h4>
                <LineChart width={450} height={300} data={data}>
                    <Line type="monotone" dataKey="sell"
                        stroke="#8884d8" strokeWidth={2} />
                    <XAxis dataKey="month" />
                    <YAxis />
                </LineChart>
            </div>
            <div>
                <h4>Investment VS Sell</h4>
                <BarChart
                    width={450}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                    <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <h4>Investment VS Revenue</h4>
                <PieChart width={450} height={300}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Tooltip />
                    <Legend />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    )
};

export default Dashbord;