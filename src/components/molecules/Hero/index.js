import React from 'react';
import { Button } from '../..';
import {
    IcCities,
    IcTraveller,
    IcTreasure,
    IllHero,
    IllHeroFrame,
} from '../../../assets/images';
import numberFormat  from '../../../helper';
import Fade from 'react-reveal/Fade';

const Hero = (props) => {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    return (
        <Fade bottom>
            <section className="container pt-4">
                    <div className="row align-items-center">
                        <div className="col-auto pr-5" style={{width: "530px"}}>
                            <h1 className="font-weight-bold line-height-2 mb-3">
                                Forget Busy Work, <br/> 
                                Start Next Vacation
                            </h1>
                            <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
                                We provide what you need to enjoy your 
                                holiday with family. Time to make another 
                                memorable moments.
                            </p>
                            <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>Show Me Now</Button>

                            <div className="row" style={{marginTop: "80px"}}>
                                <div className="col-auto" style={{marginRight: 35}}>
                                    <img src={IcTraveller} alt={`${props.data.travelers} Travellers`} width="36" height="36"/>
                                    <h6 className="mt-3 font-weight-bold">
                                        {numberFormat(props.data.travelers)} 
                                        <span className="text-gray-500 font-weight-light"> travelers</span>
                                    </h6>
                                </div>
                                <div className="col-auto" style={{marginRight: 35}}>
                                    <img src={IcCities} alt={`${props.data.cities} Cities`} width="36" height="36"/>
                                    <h6 className="mt-3 font-weight-bold">
                                        {numberFormat(props.data.cities)} 
                                        <span className="text-gray-500 font-weight-light"> cities</span>
                                    </h6>
                                </div>
                                <div className="col-auto">
                                    <img src={IcTreasure} alt={`${props.data.treasures} Treasure`} width="36" height="36"/>
                                    <h6 className="mt-3 font-weight-bold">
                                        {numberFormat(props.data.treasures)} 
                                        <span className="text-gray-500 font-weight-light"> treasure</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 pl-5">
                            <div className="image-hero" style={{width: "520px", height: "410px"}}>
                                <img src={IllHero} alt="Room with couches" className="img-fluid position-absolute" style={{margin : "-30px 0 0 -30px", zIndex: 1}}/>
                                <img src={IllHeroFrame} alt="Room with couches frame" className="img-fluid position-absolute" style={{margin : "0 -15px -15px 0"}}/>
                            </div>
                        </div>
                    </div>
            </section>
        </Fade>
    )
};

export default Hero;
