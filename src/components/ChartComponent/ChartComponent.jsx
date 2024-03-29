import React, { useEffect, useState } from 'react'
import Style from './ChartComponent.module.css'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend } from 'chart.js'
import { ST } from 'next/dist/shared/lib/utils'

Chart.register(
    LineElement, CategoryScale, LinearScale, PointElement, Legend
)


export default function ChartComponent() {

    const [chartData, setChartData] = useState(null);
    const [years, setYears] = useState([]);
    const [populationData, setPopulationData] = useState([])

    useEffect(() => {
        getChartData()
    }, [])

    const data = {
        labels: years,
        datasets: [{
            labels: years,
            data: populationData,
            backgroundColor: 'white',
            borderColor: 'green',
            pointBorderColor: 'aqua'
        }],
    }

    const options = {
        scales: {
            y: {
                // min: 3,
                // max: 6
            }
        },
        responsive: true
    }

    function getChartData() {

        axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((response) => {
            setChartData(response?.data);
            const data = response?.data?.data;
            data.sort((a, b) => a.Year - b.Year);
            const populations = data?.map(entry => entry?.Population);
            const years = data?.map(entry => entry?.Year);
            console.log("res is", data, response, years, populations)
            setPopulationData(populations);
            setYears(years)
        }).catch((error) => {
            console.log("error while fetching chart data", error)
        })
    }
    return (
        <div className={Style.main}>
            <div className={Style.chartName}>Chart</div>
            <div className={Style.chart}>
                <Line
                    data={data}
                    options={options}
                >
                </Line>
            </div>
        </div >
    )
}
