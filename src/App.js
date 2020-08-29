import React from 'react';

import {Cards , Chart, CountryPicker } from './components' ;
import styles from './App.module.css' ;
import {FetchData} from './api';
import { colors } from '@material-ui/core';


class App extends React.Component{
    state = {
        data:{},
        country:'',
    }
    async componentDidMount() {
        const fetcheddata = await FetchData();
         this.setState({ data: fetcheddata });
    }

    handleCountryChange = async (country) => {
        const fetcheddata = await FetchData(country);
        this.setState({ data: fetcheddata , country: country});
    }

    render(){
        const { data, country } = this.state;

        return(
            <div className={styles.container}>
                <h1>TRACK LIVE COVID-19 CASES</h1>
               <Cards data={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;