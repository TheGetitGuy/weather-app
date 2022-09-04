import React from "react"
import weatherIcon from "./otherImages/weatherLogo.png"
import getitLogo from "./otherImages/getitLogo.svg"
function PageHeader():JSX.Element
{


return(
    <div className="pageHeaderHolder">
    <a href="https://thegetitguy.com">
        <img id="getitlogo" src={getitLogo} alt="GetitGuy's Logo" />
    </a>
    <img id="pageLogo" src={weatherIcon} alt="" />
     
    </div>
)

}

export default PageHeader