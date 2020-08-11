import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Hero = props => {

    const aboutMeClickHandler = () => {
        window.location.hash = "#aboutme";
    }

    return (
        <div className="container__hero">
            <div className="hero-aboutme__container" onClick={aboutMeClickHandler}>
                <span className="hero-aboutme__label text--small text--grey">About me</span>
                <div className="hero-aboutme__photo"></div>
            </div>
            <div className="hero-content__container">
                <div className="text__heading-1 text--grey">Just start coding the web</div>
                <div className="text__content-1 text--lightblue">There shouldn't be any limits between you and your web application. Just start quickly.</div>
            </div>
        </div>
    )
}

export default Hero;