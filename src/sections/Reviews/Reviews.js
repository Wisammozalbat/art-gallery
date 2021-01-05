import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className="reviews-container">
            <h2 className="header-2--white">
                Reviews
            </h2>
            <div className='review-items-container'>
                <div className="review-item">
                    <div className="review-item__text">
                        “Truly the most interactive experience for art connoisseurs and art geeks alike”
                    </div>
                    <div className="review-item__author">
                        <span className="author__name">-Rosalind Krauss</span>
                        <span className="author__profession">Art Critic</span>
                    </div>
                </div>
                <div className="review-item">
                    <div className="review-item__text">
                        “Very up-to-date Gallery with amazing exhibitions. My favorite place in the city”
                    </div>
                    <div className="review-item__author">
                        <span className="author__name">-Simon Kaplan</span>
                        <span className="author__profession">Art Student</span>
                    </div>
                </div>
                <div className="review-item">
                    <div className="review-item__text">
                        “My very first art exhibition was here on March, 2020. great experience, overall amazing service” 
                    </div>
                    <div className="review-item__author">
                        <span className="author__name">-Stan Leibovitz</span>
                        <span className="author__profession">Artist</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;