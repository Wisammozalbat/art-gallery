import React from "react";
import './Art.css'

import Image1 from '../../assets/image-1.jpg';
import Image2 from '../../assets/image-2.jpg';
import Image3 from '../../assets/image-3.jpg';
import Image4 from '../../assets/image-4.jpg';
import Image5 from '../../assets/image-5.jpg';
import Image6 from '../../assets/image-6.jpg';
import Image7 from '../../assets/image-7.jpg';
import Image8 from '../../assets/image-8.jpg';
import Image9 from '../../assets/image-9.jpg';
import Image10 from '../../assets/image-10.jpg';
import Image11 from '../../assets/image-11.jpg';
import Image12 from '../../assets/image-12.jpg';

const images = [
    {src: Image1, artist: 'F. Nielssen', desc: 'Southbound (2016)', alt: 'Painting 1'},
    {src: Image2, artist: 'Aurora Masterson', desc: 'Picasso´s Technicolor Dreams (2017)', alt: 'Painting 2'},
    {src: Image3, artist: 'Emille Pinot', desc: 'Thousand stars (2015)', alt: 'Painting 3'},
    {src: Image4, artist: 'Emille Pinot', desc: 'Nebula (2015)', alt: 'Painting 4'},
    {src: Image5, artist: 'Ekaterina Sveld', desc: 'Blown glass (2010)', alt: 'Painting 5'},
    {src: Image6, artist: 'Eduardo García', desc: 'Malaui (2016)', alt: 'Painting 6'},
    {src: Image7, artist: 'Nina Sánchez', desc: 'La inquisición (2012)', alt: 'Painting 7'},
    {src: Image8, artist: 'F. Nielssen', desc: 'Mars Fury (2014)', alt: 'Painting 8'},
    {src: Image9, artist: 'B. Christiansen', desc: 'Self Portrait (2009)', alt: 'Painting 9'},
    {src: Image10, artist: 'Pierre Lafayette', desc: 'La Mer (2015)', alt: 'Painting 10'},
    {src: Image11, artist: 'Liz Wozniak', desc: 'Gelato (2020)', alt: 'Painting 11'},
    {src: Image12, artist: 'Alejo Pascal', desc: 'Enamorado (2011)', alt: 'Painting 12'},

]

const Art = () => {
    return (
        <div className="art-container">
            <div className="art-title">
                Most Popular Art
            </div>
            <div className="art-grid">
                {images.map((image, index) => {
                    return (
                        <div className="art-grid__item" key={index}>
                            <img className="art-grid__item-img" src={image.src} alt={image.alt}/>
                            <div className='art-grid__item-text'>
                                <div className='art-grid__item-desc'>{image.desc}</div>
                                <div className='art-grid__item-author'>By {image.artist}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Art;