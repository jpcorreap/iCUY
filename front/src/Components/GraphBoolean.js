import React from 'react'
import Chart from 'react-apexcharts'

const GraphBoolean = (props) => {

    const data = props.data

    const dates = data.map(
        record => record.date
    )

    const maxDate = new Date(Math.max.apply(null, dates));
    const minDate = new Date(Math.min.apply(null, dates));

    Date.prototype.addDays = (days) => {
        const dat = new Date()
        dat.setDate(dat.getDate() + days);
        return dat;
    }

    const getDates = (startDate, stopDate) => {
        let dateArray = new Array();
        let currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(currentDate)
            currentDate = currentDate.addDays(1);
        }
        return dateArray;
    }

    let dateArray = getDates(minDate, maxDate);

    const isInArray = (array, value) => {
        return (array.find(item => { return item == value }) || []).length > 0;
    }

    const formatDate = (date) => {
        const d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const records = dateArray.map(
        date => {
            return isInArray(dates, formatDate(date)) ? { x: formatDate(date), y: 29 } : { x: formatDate(date), y: 11 }
        }
    )

    const options = {
        series : {
            name: "Done",
            data: records
        }
    }

    return (
        <div className="w-100 h-75 position-absolute bottom-0 ">
            <Chart options={options} type="heatmap" width={"80%"} height={"100%"} />
        </div>
    )

}

export default GraphBoolean
