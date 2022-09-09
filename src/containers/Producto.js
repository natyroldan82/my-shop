import React from 'react';
import producto from './Productos'


function Card({imageSource,title,text}) {
    
    return(
        <div className='card text-center bg-dark '>
            <img src= {imageSource} alt= "iphone"/>
            <div className='card-body text-light'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>{text}</p>
                <a href="#1" className='btn btn-outline-secondary bg-info'>INFO</a>
            </div>
        </div>
    )
}
export default Card;