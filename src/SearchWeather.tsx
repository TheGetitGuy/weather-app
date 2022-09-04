import React, { useState } from 'react';
import './WeatherPanels.css'; 
import WeatherPanels from './WeatherPanels'

function SearchWeather():JSX.Element{
    const [inputValue, setInputValue] = useState<string>("")
    const [searchValue, setSearchValue] = useState<string>("")
    const handleClick:React.MouseEventHandler<HTMLButtonElement> = (event) =>{
        setSearchValue(inputValue)
    }
    const inputValueHandler:React.ChangeEventHandler<HTMLInputElement> = (event) =>
    {
        setInputValue(event.target.value);
    }

    return <>
    <div className='inputHolder'>
        <input value={inputValue} type="text" onChange={inputValueHandler} placeholder="Enter a city"></input>
        <button onClick={handleClick}>Search <br/> Weather</button>
    </div>
    <WeatherPanels search={searchValue}/>
    
    </>
}

export default SearchWeather