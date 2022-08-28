import React from 'react';
import getIcon from './getIcon'; 
import './App.css';
import WeatherCard from './WeatherCard';
import {useEffect, useState} from "react";
import { dayModel } from './AppInterfaces';

function App():JSX.Element {

  const [weather, setWeather] = useState<dayModel[]>()
 // const [weatherTemp, setWeatherTemp] = useState('70')
  //const [date, setDate] = useState('')
  //const [weatherIcon, setWeatherIcon] = useState(process.env.PUBLIC_URL+'/loading.svg')
 // const [weatherToQuery, setWeatherToQuery] = useState('dillonvale')
  const weatherToQuery = 'New York';
  useEffect(()=>{
    fetch(`https://server2-0.vercel.app/weather/request?queryWeather=${weatherToQuery}`)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(response =>{
        const weatherArray: dayModel[] = response;
        setWeather(weatherArray)
       // const newDate = new Date(parseInt(response.currentConditions.datetimeEpoch)*1000)
       // setWeatherDescription(response.description)
       // setDate(newDate.toDateString())
       // setWeatherTemp(response.currentConditions.temp)
       // setWeatherIcon(getIcon(response.currentConditions.icon)) //grabs the string from the getIcon.ts file.
      })
      .catch(err =>{
        console.log(err)
      });
  },[weatherToQuery]);

  return (
    <div className="App">
      <header className="App-header">
        {weather?.map(element =>{
          return(  
          <WeatherCard iconurl={getIcon(element.icon)} date={element.datetime} temp={element.temp} description={element.description}/> 
          )
        })}
      </header>
    </div>
  );
}

export default App;
