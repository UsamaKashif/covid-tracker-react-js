import React, { useEffect, useState } from 'react'


import {Line} from 'react-chartjs-2';


import {dailySummary} from '../../API'

import "../../App.css"


const Charts = () => {
    const [d , setD] = useState([])
    useEffect(() => {
        async function daily(){
            const da = await dailySummary()
            setD(da)
        }
        daily()
    }, [])

   console.log(d)
    return (
        <div className="chartContainer">
            <Line 
            className="chart"
            data={{
                labels: d.map(({reportDate}) => reportDate),
                datasets: [{
                    data: d.map(({confirmed}) => confirmed.total),
                    label: "Infected",
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: d.map(({deaths}) => deaths.total),
                    label: "Deaths",
                    borderColor: 'red',
                    fill: true
                }]
            }}
        />
        </div>
    )
}


export default Charts