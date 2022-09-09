import React from 'react'
import Producto from './Producto';
import image1 from '../assets/iphone-12-blue.png';
import image2 from '../assets/iphone-12-green.png';
import image3 from '../assets/iphone-12-pro.png';
const Productos = [
  {
    id:1,
    title:'Apple Iphone 11',
    text:" 810-950",
    image:'image1'
  },
  {
    id:2,
    title:"Apple Iphone 12",
    text:"1050-1250",
    image:"image2"
  },
  {
    id:3,
    title:'Apple Iphone 13',
    text:" 1280-1950",
    image:'image3'
   }
]
function Cards() {
  
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className='row'>
           {
            Productos.map( Card =>(
              <div className='col-md-4'key={Card.id}>
                <Producto title={Card.title} imageSource={Card.image} text={Card.text}/>
                </div>
            ))
           }
           
       </div>
   
     </div>
  )
 }
 export default Cards;


