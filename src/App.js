import React, { useEffect, useState } from 'react'
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import Cards from './components/cards/Cards';
import Charts from './components/chart/Chart';
import CountrySearch from './components/country_search/CountrySearch';


import {countries} from './API'
import { Loader } from './components/Loader';

function App() {
  const [c, setC] = useState([])
  useEffect(() => {
    async function cList () {
      const d = await countries()
      setC(d)
    }
    setTimeout(cList(), 3000)
    
  }, [])

  if (c.length > 0) {

    return (
      <GlobalProvider>
        <div className="container">
          <section className="cards-container">
            <h2 className="cards-title">COVID-19 TRACKER</h2>
            <CountrySearch cList={c} />
            <Cards  />
          </section>
  
          <section className="chart-container">
            <Charts />
          </section>
        </div>
      </GlobalProvider>
    );
  }else{
    return (
      <Loader />
    )
  }
}

export default App;
