import React from "react";
import './WeatherCard.css';

function WeatherCard(props:{iconurl: string, description: string, temp: number, date: string}):JSX.Element {
    return(
        <div className="weatherCardHolder">
            <div className="topRow">
                <img className="weatherIcon" alt="Weather Icon" src={props.iconurl}/>
                <h1 className='temp'>{props.temp}</h1>
            </div>
            <p>{props.date}</p>
            <p>{props.description}</p>
        </div>
    )
}





export default WeatherCard