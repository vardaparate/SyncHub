import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className = "cards">
        <h1>Introducing our Pillars!</h1>
        <div className = "cards__container">
            <div className = "cards__wrapper">
                <ul className = "cards__items">
                    <CardItem src = "/images/img-9.jpg" label = "CEO" path = "/services"
                        text = 'Chief Executive Officer' />
                    <CardItem src = "/images/img-2.jpg" label = "CFO" path = "/services"
                        text = "Chief Financial Officer" />
                </ul>
                <ul className = "cards__items">
                    <CardItem src = "/images/img-3.jpg" label = "COO" path = "/services"
                        text = "Chief Operating Officer" />
                    <CardItem src = "/images/img-4.jpg" label = "CMO" path = "/services"
                        text = "Chief Marketing Officer" />
                    <CardItem src = "/images/img-8.jpg" label = "CTO" path = "/services"
                        text = "Chief Technology Officer" />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
