import React, {useState, useEffect, useCallback} from 'react'
import './Header.css';
import Image1 from '../../assets/slider-1.0.jpg';
import Image2 from '../../assets/slider-2.jpg';
import Image3 from '../../assets/slider-3.jpg';
import Image4 from '../../assets/slider-4.0.jpg';
import Image5 from '../../assets/slider-5.0.jpg';

import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';


// const images = [{src: Image1, alt: 'slider image 1'}, {src: Image2, alt: 'slider image 2'}, {src: Image3, alt: 'slider image 3'}];


const Header = () => {

    // const sliderLength = images.length;
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('');
    
    // const nextSlide = useCallback(() => {
    //     setCurrent(current === sliderLength - 1 ? 0 : current + 1);
    //     setDirection('slide-left');
    // }, [current, sliderLength]);
    
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? sliderLength - 1 : current - 1);
    //     setDirection('slide-right');
    // }
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //        nextSlide();
    //     }, 4000);
    //     return () => clearInterval(interval);
    //   }, [sliderLength, nextSlide]);

    const nextSlide = useCallback(() => {
        setCurrent(current === 4 ? 0 : current + 1);
        setDirection('slide-left');
    }, [current]);
    
    const prevSlide = () => {
        setCurrent(current === 0 ? 4 : current - 1);
        setDirection('slide-right');
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //        nextSlide();
    //     }, 4000);
    //     return () => clearInterval(interval);
    //   }, [nextSlide]);


    return (
        <div className="header">
            <BsChevronCompactLeft className='header__arrow header__arrow--left' onClick={prevSlide}/>
            <BsChevronCompactRight className='header__arrow header__arrow--right' onClick={nextSlide}/>
            <div className="dots">
                <div className={current === 0 ? 'dot active' : 'dot'}></div>
                <div className={current === 1 ? 'dot active' : 'dot'}></div>
                <div className={current === 2 ? 'dot active' : 'dot'}></div>
                <div className={current === 3 ? 'dot active' : 'dot'}></div>
                <div className={current === 4 ? 'dot active' : 'dot'}></div>
            </div>

            <div className={[4 === current ? 'slide active' : 'slide', direction].join(" ")}>
                <div className="header-title">
                    <h1>
                    TrendArt <span className="signature">Signature</span>
                    </h1>
                    <h3 className='subtitle'>Shop the online store now</h3>
                </div>
                <img className='slide__img' src={Image5} alt="slider 5" />
                <div className="slide__cover"></div>
            </div>

            <div className={[3 === current ? 'slide active' : 'slide', direction].join(" ")}>
                <div className="header-title montserrat">
                    <h1>
                        ONLINE 3D EXHIBITION TOUR
                    </h1>
                    <h3 className='subtitle'>Book your online visit today</h3>
                </div>
                <img className='slide__img' src={Image4} alt="slider 4" />
                <div className="slide__cover"></div>
            </div>

            <div className={[2 === current ? 'slide active' : 'slide', direction].join(" ")}>
                <div className="header-title">
                    <h1>
                        TAKASHI MURAKAMI
                    </h1>
                    <h3 className="subtitle">Abstract Faces</h3>
                </div>
                <img className='slide__img' src={Image3} alt="slider 3" />
                <div className="slide__cover"></div>
            </div>

            <div className={[1 === current ? 'slide active' : 'slide', direction].join(" ")}>
                <div className="header-title">
                    <h1>
                    ABSTRACT EXPRESSIONISM
                    </h1>
                    <h3 className="subtitle">Cecily´s Brown bold brushwork</h3>
                </div>
                <img className='slide__img' src={Image2} alt="slider 2" />
                <div className="slide__cover"></div>
            </div>

            <div className={[0 === current ? 'slide active' : 'slide', direction].join(" ")}>
                <div className="header-title">
                    <h1 className="main-slide__title">
                    TrendArt
                    </h1>
                    <h3 className='subtitle main-slide__subtitle'>We bring contemporary art closer to you</h3>
                </div>
                <img className='slide__img' src={Image1} alt="slider 1" />
                <div className="slide__cover"></div>
            </div>

            {/* {images.map((image, index) => {
                return (
                    <div className={[index === current ? 'slide active' : 'slide', direction].join(" ")} key={index}>
                        <div className="header-title">
                            <h1>
                            TrendArt
                            </h1>
                            <h3>Created to bring new art to you</h3>
                        </div>
                        <img className='slide__img' src={image.src} alt={image.alt} />
                        <div className="slide__cover"></div>
                    </div>
                )
            }).reverse()} */}
        </div>
    )
}

export default Header