
import ItemDetail from '../../src/componentes/ItemDetail';
import image1 from '../assets/index.jpg';
import React, { useEffect,useState } from 'react';

//const film = {id: 1, image: "https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", title: "Intelesterllar"};
const Productos = 
    {
      id:1, title:"Apple Iphone 11",price:"$ 810-950",desc: "Capacidad  64GB, 128GB Colores Black, Blue, Green, Red, White"	,image: `${image1}`,stock: " stock 10",
  
    }; 
export const ItemDetailContainer = () => {
    
        const [data, setData] = useState ({});
        useEffect (() => {
            const getData = new Promise(resolve => {
                setTimeout(() => {
                    resolve(Productos);
                }, 3000);
            });
            getData.then(res => setData(res));
        }, [])
        
        return(
        <ItemDetail data= {data}/>
    );
 }
export default ItemDetailContainer;
