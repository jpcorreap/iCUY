import React, { useState, useEffect } from 'react'
import GraphBoolean from './GraphBoolean'
import GraphNumber from './GraphNumber'

const D3 = (props) => {

    const [habit, setHabit] = useState({})
    const [records, setRecords] = useState(null)

    useEffect(() => {
        fetchHabit()
        fetchRecords()
    }, [])

    const fetchHabit = () => {
        const url = `/habits/filter?title=${props.title}&userEmail=${props.userEmail}`

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch(url, requestOptions)
            .then(res => {
                return res.json()
            })
            .then(habits => {
                setHabit(habits[0])
            })
    }


    const fetchRecords = () => {
        const url = `/records/filter?habitTitle=${props.title}&userEmail=${props.userEmail}`

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch(url, requestOptions)
            .then(res => {
                return res.json()
            })
            .then(records => {
                setRecords(records.map(
                    record => ({
                        date: record.date,
                        value: record.value
                    })
                ))
            })
    }

    return (
        <div>
            <div className="w-100 p-3 h-25 flex" style={{ background: 'green' }}>
                {habit.title ? <h1 style={{ color: '#F2F2F2' }}>{habit.title}</h1> : ""}
            </div>
            {console.log(records)}
            <div className="w-100 p-3 h-75 overflow-auto" style={{ maxWidth: '100%' }}>
                {habit.inputType === 'boolean' ? records?<GraphBoolean data={records} />:""  :
                    habit.inputType === 'number' ? records?<GraphNumber data={records} />:"" :
                        habit.inputType === 'hour' ? <div>Hour</div> :
                            habit.inputType === 'date' ? <div>Date</div> : ""}
            </div>
        </div>
    )

}

export default D3