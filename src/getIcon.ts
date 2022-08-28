import clearDay from "./Iconset/clear-day.svg"
import clearNight from "./Iconset/clear-night.svg"
import fog from "./Iconset/fog.svg"
import cloudy from "./Iconset/cloudy.svg"
import hail from "./Iconset/hail.svg"
import partlyCloudyDay from "./Iconset/partly-cloudy-day.svg"
import partlyCloudyNight from "./Iconset/partly-cloudy-night.svg"
import rainSnowShowersDay from "./Iconset/rain-snow-showers-day.svg"
import rainSnowShowersNight from "./Iconset/rain-snow-showers-night.svg"
import rainSnow from "./Iconset/rain-snow.svg"
import rain from "./Iconset/rain.svg"
import showersDay from "./Iconset/showers-day.svg"
import showersNight from "./Iconset/showers-night.svg"
import sleet from "./Iconset/sleet.svg"
import snowShowersDay from "./Iconset/snow-showers-day.svg"
import snowShowersNight from "./Iconset/snow-showers-night.svg"
import snow from "./Iconset/snow.svg"
import thunderRain from "./Iconset/thunder-rain.svg"
import thunderShowersDay from "./Iconset/thunder-showers-day.svg"
import thunderShowersNight from "./Iconset/thunder-showers-night.svg"
import thunder from "./Iconset/thunder.svg"
import wind from "./Iconset/wind.svg"
// OOF, listen this is a VERY bad way to pull all of my images when I need them.. But I dont know of a better way to do this?
// maybe  %PUBLIC_URL% ?
const getIcon = (iconName:string):string=>{
    const Icons = new Map([
        ["clear-day", clearDay],
        ["clear-night", clearNight],
        ["cloudy", cloudy],
        ["fog", fog],
        ["hail", hail],
        ["partly-cloudy-day", partlyCloudyDay],
        ["partly-cloudy-night", partlyCloudyNight],
        ["rain-snow-showers-day", rainSnowShowersDay],
        ["rain-snow-showers-night", rainSnowShowersNight],
        ["rain-snow", rainSnow],
        ["rain", rain],
        ["showers-day", showersDay],
        ["showers-night", showersNight],
        ["snow-showers-day", snowShowersDay],
        ["sleet", sleet],
        ["snow-showers-night", snowShowersNight],
        ["snow", snow],
        ["thunder-rain", thunderRain],
        ["thunder-shower-day", thunderShowersDay],
        ["thunder-shower-night", thunderShowersNight],
        ["thunder", thunder],
        ["wind", wind],
    ])
    let iconToReturn:string = Icons.get(iconName) || clearDay
    return iconToReturn
}
export default getIcon