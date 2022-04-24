import React from 'react'
import './CustomerReview.css';
import Chart from 'react-apexcharts';
const CustomerReview = () => {
    const data = {
        series: [
            {
                name: 'series-1',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
        options:{
            chart: {
                height: "auto",
                type: 'area',
            },
            fill:{
                type: 'gradient',
                colors: ["#fff"],
            },
            dataLabels: {
                enabled: false,
            },
            stroke:{
                curve: 'smooth',
                colors: ["#ff929f"],
            },
            tooltip:{
                x: {
                    format: 'dd MMM yyyy HH:mm'
                },
            },
            grid:{
                show: false,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2020-01-01T00:00:00.00Z",
                    "2020-01-02T00:00:00.00Z",
                    "2020-01-03T00:00:00.00Z",
                    "2020-01-04T00:00:00.00Z",
                    "2020-01-05T00:00:00.00Z",
                    "2020-01-06T00:00:00.00Z",
                ],
            },
            yaxis: {
                show: false,
            },
            toolbar:{
                show: false,
            },

        },
    };
  return (
    <div className="CustomerReview">
        <Chart series={data.series} options={data.options} type="area" />
    </div>
  )
}

export default CustomerReview