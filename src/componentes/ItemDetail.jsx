import React from 'react';
import Productos from '../../src/utils/Data';
import '../../src/'
 export const ItemDetail = ({data}) => {
    return(
        <div className= "container">
            <img className="detail-image" src= {data.image}/>
            <div className= "content">
                <h1>{data.title}</h1>
                <h2>{data.desc}</h2>
                <h3>{data.stock}</h3>
            </div>        
        </div>
    );
 }
export default ItemDetail;
