import React from 'react'


import "../App.css"

import CircularProgress from '@material-ui/core/CircularProgress'



export const Loader = () => {

    return (
        <div className="loaderContainer">
            <h1>COVID-19 TRACKER</h1>
            <h3>LOADING</h3>
            <div className="loaders">
                <CircularProgress color="secondary" />
                <CircularProgress color="secondary" />
            </div>
        </div>
    )
}
