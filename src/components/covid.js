import React, { useEffect, useState } from 'react'
import Covidbox from './covidbox';
const Covid = (props) => {
    const [data, setData] = useState({});
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            const temp = actualData.statewise.filter(s => s.state == props.StateName);
            setData(temp[0]);
        } catch (err) {
            console.log(err);
        }
    }
     useEffect(() => {
        getCovidData();
    }, [props.StateName]);
    return (
        <>
            <div className='text-white w-100 text-center'>COVID-19 CORONAVIRUS TRACKER</div>

            <div className='row text-center'>
            <Covidbox tittle1="OUR" tittle2="COUNTRY" data={props.StateName} india=' ,INDIA'  class='col-xl-4 col-sm-12 rounded margin w-25 height bg-primary'/>
            <Covidbox tittle1="TOTAL" tittle2="RECOVERED" data={data?.recovered} class='col-xl-4 col-sm-12 rounded margin w-25 height bg-secondary'/>
            <Covidbox tittle1="TOTAL" tittle2="CONFIRMED" data={data?.confirmed} class='col-xl-4 col-sm-12 rounded margin w-25 height bg-success'/>
            <Covidbox tittle1="TOTAL" tittle2="DEATHS" data={data?.deaths} class='col-xl-4 col-sm-12 rounded margin w-25 height bg-danger'/>
            <Covidbox tittle1="TOTAL" tittle2="ACTIVE" data={data?.active} class='col-xl-4 col-sm-12 rounded margin w-25 height bg-warning'/>
            <Covidbox tittle1="LAST" tittle2="UPDATED" data={data?.lastupdatedtime} class='col-xl-4 col-sm-12 rounded margin w-25 height bg-dark'/>
          
               
            </div>



        </>
    )
}

export default Covid;
