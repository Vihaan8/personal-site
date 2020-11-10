import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> About Me</h1>
      <div className='cards__container_berk'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/berkeley2.jpg'
              text= 'Education'
              //label='Fun'
              path='/Experience1'
            />
            <CardItem
              src='images/pulse.png'
              text= 'Work Experience'
              //label='More Fun'
              path='/Experience2'
            />

          </ul>
          

          
          <ul className='cards__items'>
            <CardItem
              src='images/xkcd.gif'
              text='Technical Projects'
              //label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Resume' 
              //label='Adventure'
              path='/products'
            />
                        <CardItem
              src='images/vihaan1.jpg'
              text='More About Me! :D' 
              //label='Adventure'
              path='/products'
            />


          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;