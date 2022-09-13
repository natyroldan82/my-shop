
import Producto from '../containers/Producto';
import { useState, useEffect } from 'react';
import Promesa from '../utils/Promesa';
import Productos from '../utils/Data';


const Cards = () => {
const [data, setData] = useState([])
 //componentDidMount
   useEffect(() => {
    Promesa(2000, Productos)
    .then(datos =>setData(Productos))
    .catch(err => console.log (err))
    
  console.log('desde el dom nuevo')
}, []);
  console.log(Productos)

  return (
   <>
   <div className="container d-flex justify-content-center align-items-center h-100">
        <div className='row'>
           {
            data.map( Card =>(
            
              <div className='col-md-4'key={Card.id}>
                <Producto 
                  title={Card.title} 
                  imageSource={Card.image}
                  price={Card.price}/>
                </div>
            ))
           }
          
       </div>
   
     </div>
     </>
  );
          }
        
 export default Cards;


