import React from "react";
import './WeatherCard.css';

function WeatherCard(props:{iconurl: string, description: string, temp: number, date: string, address: string}):JSX.Element {
    return(
        <div className="weatherCardHolder">
            <div className="topRow">
                <img className="weatherIcon" alt="Weather Icon" src={props.iconurl}/>
                <h1 className='temp'>{props.temp}</h1>
            </div>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <p>{props.address}</p>
        </div>
    )
}





export default WeatherCard