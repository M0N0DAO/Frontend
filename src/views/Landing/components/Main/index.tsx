import React from "react";
import "./main.scss";
// import { ReactComponent as LogoImage }  from "../../../../assets/icons/dS8.svg";
// import LogoImage  from "../../../../assets/icons/dS8.png";
import LogoImage  from "../../../../assets/icons/Imperio_animated_logo_discord.gif";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img className = "logo_image" src={LogoImage} alt="" />
            </div>
            <div className="landing-main-btns-wrap">
                <Link to="/presale-dashboard">
                    <div className="landing-main-btn">
                        <p>Enter App</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Main;
