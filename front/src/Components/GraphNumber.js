import React from 'react'
import Chart from 'react-apexcharts'

const GraphNumber = (props) => {

    const data = props.data

    data.sort((a, b) => {
        let AEl = new Date(a.date), BEl = new Date(b.date);
        if (AEl < BEl) return -1;
        if (AEl > BEl) return 1;
        return 0;
    });

    const options = {
        chart: {
            id: 'Dates'
        },
        xaxis: {
            categories: data.map(record => record.date)
        }
    }

    const series = [{
        name: 'Number',
        data: data.map(record => record.value)
    }]

    return (
        <div className = "w-100 h-75 position-absolute bottom-0 ">
            <Chart options={options} series={series} type="line" width={"80%"} height={"100%"} />
        </div>
    )

}

export default GraphNumber

