import React, { useRef } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pink from '../../assests/img/Pink-Space.png'
import Muse from '../../assests/img/muse.png'
import Sweep from '../../assests/img/Sweep-widget.png'
import Atrena from '../../assests/img/Atrena.png'
import EtDelivers from '../../assests/img/Et-delivers.png'
import NeonShine from '../../assests/img/Neon-shine.png'
import Pravi from '../../assests/img/PRAVI.png'
import Sambargo from '../../assests/img/Sambargo.png'
import Partsgo from '../../assests/img/partsgo (1).png'
import Ifix from '../../assests/img/screen-shot.png'
import { Link } from "react-router-dom";

const CardSlider = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of cards to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        arrows: true,
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 986,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 762,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className=" sliders">
                <div className="container common-margin">
                    <div className="d-flex justify-content-between wrap">
                        <div>
                            <div className="small-title">OUR LATEST PROJECTS</div>
                            <h1>Our Successful <span>Projects</span></h1>
                        </div>
                        <div>
                            <button className="themeButtonScroll" onClick={previous}>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                    <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                                </svg></span>
                                PREV
                            </button>
                            <button className="themeButtonScroll" onClick={next}>
                                NEXT
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                </svg></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Slider ref={slider => {
                            sliderRef = slider;
                        }} {...settings}>
                            <Link className="col-lg-4 scroll single-img"><img src={Pink} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT MARKTING SOFTWARE</div>
                                        <div className="text2">Pink Space</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Muse} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT MARKTING</div>
                                        <div className="text2">MUSE FINANCE</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Sweep} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT MARKTING</div>
                                        <div className="text2">SWEEP WIDGET</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Atrena} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT MARKTING SOFTWARE</div>
                                        <div className="text2">ATRENA PEGLER</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={EtDelivers} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT</div>
                                        <div className="text2">ET DELIVERS</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Pink} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT MARKTING SOFTWARE</div>
                                        <div className="text2">Pink Space</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Muse} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT MARKTING</div>
                                        <div className="text2">MUSE FINANCE</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={NeonShine} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT ENGINEERING SOFTWARE</div>
                                        <div className="text2">neon out Shine</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Pravi} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>ENGINEERING MARKTING MObile</div>
                                        <div className="text2">PRAVI</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Sambargo} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DEVELOMENT MARKTING SOFTWARE</div>
                                        <div className="text2">Sambargo digital</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Partsgo} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>MOBILE SOFTWARe</div>
                                        <div className="text2">Partsgo</div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-lg-4 scroll single-img"><img src={Ifix} alt="" />
                                <div className="img-overlay">
                                    <div className="text">
                                        <div>DIGITAL SECURITY</div>
                                        <div className="text2">ifix fast</div>
                                    </div>
                                </div>
                            </Link>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSlider;
