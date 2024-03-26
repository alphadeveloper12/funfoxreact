import React, { useState,useEffect } from 'react';
import './assets/css/style.css'; // Import your custom CSS file
import informationIcon from './assets/images/information.svg'; // Import the image
import supportIcon from './assets/images/support.svg'; // Import the image
import leftIcon from './assets/images/left.svg'; // Import the image
import rightIcon from './assets/images/right.svg'; // Import the image
import dropdownIcon from './assets/images/dropdown.svg'; // Import the image
import cloudIcon from './assets/images/setting_cloud.svg'; // Import the image
import characterIcon from './assets/images/characterstics_cloud.svg'; // Import the image
import plotIcon from './assets/images/plot.svg'; // Import the image
import problemIcon from './assets/images/problem.svg'; // Import the image
import resolutionIcon from './assets/images/resolution.svg'; // Import the image
import sunnydayIcon from './assets/images/sunny_day.svg'; // Import the image
import coldRainyIcon from './assets/images/cold_rainy.svg'; // Import the image
import clockIcon from './assets/images/clock.svg'; // Import the image
import homeIcon from './assets/images/home.svg'; // Import the image
import background1 from './assets/images/background.svg';
import background2 from './assets/images/slide_2_background.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        showSlide(currentSlide); // Show first slide on page load
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const showSlide = (slideIndex) => {
        const slides = document.querySelectorAll('.slide');
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });

        setCurrentSlide(slideIndex);
    };

    const changeSlide = (index) => {
        showSlide(index);
    };
    const backgroundImage = `url("${background1}")`;
const background2Image = `url("${background2}")`;

    return (
        <div className="container-fluid">
            <section id="main-section" style={{ backgroundImage: currentSlide === 1 ? background2Image  : backgroundImage }}>
                <div className="slide-container">
                    <div className="slide">
                        <h1 className="upper_heading">Elements of Story Writing</h1>
                        <p className="description_1">
                            Welcome to term 2 of Writers Club. Are you excited for this amazing journey? Over the next week, we will be practicing the different elements of story writing. Our aim is to make stories more interesting and exciting.
                        </p>
                        <p className="description_2">
                            There are elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                            <div className="cloud_div">
                                <img src={cloudIcon} alt="Setting ClousunnydayIcond" />
                            </div>
                            <div className="cloud_div">
                                <img src={characterIcon} alt="Characteristics Cloud" />
                            </div>
                            <div className="cloud_div">
                                <img src={plotIcon} alt="Plot" />
                            </div>
                            <div className="cloud_div">
                                <img src={problemIcon} alt="Problem" />
                            </div>
                            <div className="cloud_div">
                                <img src={resolutionIcon} alt="Resolution" />
                            </div>
                        </div>
                        <p className="description_1">
                            You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
                        </p>
                        <div className="slide_1_element">
                            <p className="slide_1_text">
                                For today’s lesson, we will try to understand and practice writing the setting for our stories.
                            </p>
                            <p className="slide_2_text">
                                The setting is an important element of every fiction story.
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <h1 className="slide_2_heading">Can you figure out the definition of setting from the following examples?</h1>
                        <p className="slide_2_p">(take a minute to think about this)</p>
                        <div className="row d-flex justify-content-center align-items-baseline">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <div>
                                    
                                    <div className="slide_2_guess">
                                        <img src={sunnydayIcon} alt="Sunny day at a beach" />
                                    </div>
                                    <h1 className="guess_text">Sunny day at a beach</h1>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <div>
                                    <div className="slide_2_guess">
                                        <img src={coldRainyIcon} alt="A cold rainy night in a haunted house in October" />
                                    </div>
                                    <h1 className="guess_text">A cold rainy night in a haunted house in October</h1>
                                </div>
                            </div>
                            <p className="slide_2_p_1">So, what do you think the definition of setting is?</p>
                            <div className="row guess_row" style={{ marginTop: '30px' }}>
                                <div className="col-2 d-flex align-items-center">
                                    <p className="slide_2_p_1">Any guesses?</p>
                                </div>
                                <div className="col-8 guess">
                                    <input type="text" className="input-with-line" />
                                </div>
                                <div className="col-2 d-flex align-items-center">
                                    <p className="slide_2_p_1">Hint: <img src={clockIcon} alt="Clock" /> <img src={homeIcon} alt="Home" /></p>
                                </div>
                            </div>
                            <p className="description_2" style={{ marginTop: '20px' }}>
                                Setting is the time <img src={clockIcon} alt="Clock" /> and place <img src={homeIcon} alt="Home" /> of a story. It often answers the questions: when? and where?
                            </p>
                            <p className="slide_2_p_1">The time of the story could be in the past, future, day, night, summer or winter. A story may take place in a school, a mall, a desert, an airplane or in a variety of other places.</p>
                        </div>
                    </div>
                </div>

                {/* Slide buttons */}
                <div className="button-main-div row">
                    <div className="col-2">
                        <img src={supportIcon} alt="support icon" />
                    </div>
                    <div className="slide-buttons col-8">
                        <button onClick={() => changeSlide(currentSlide - 1)}>
                            <img src={leftIcon} alt="left arrow" />
                        </button>
                        <div className="slide-number">
                            <h1 id='slide-number'>{currentSlide + 1}</h1>
                            <div className="drop_down_div">
                                <img src={dropdownIcon} alt="dropdown icon" />
                            </div>
                        </div>
                        <button onClick={() => changeSlide(currentSlide + 1)}>
                            <img src={rightIcon} alt="right arrow" />
                        </button>
                        {/* Add more buttons as needed */}
                    </div>
                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <img src={informationIcon} alt="information icon" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainSection;
