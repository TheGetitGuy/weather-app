import React from 'react';
import getIcon from './getIcon'; 
import './WeatherPanels.css';
import WeatherCard from './WeatherCard';
import {useEffect, useState} from "react";
import { dayModel } from './AppInterfaces';

function WeatherPanels(props:{search:string}):JSX.Element {

  const [weather, setWeather] = useState<dayModel[]>() 
  const weatherToQuery = props.search;
  useEffect(()=>{
    fetch(`https://server2-0.vercel.app/weather/request?queryWeather=${weatherToQuery}`)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(response =>{
        const weatherArray: dayModel[] = response;
        setWeather(weatherArray) 
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
          <WeatherCard  iconurl={getIcon(element.icon)} date={element.datetime} temp={element.temp} description={element.description}/> 
          )
        })}
      </header>
    </div>
  );
}

export default WeatherPanels;
