import React, { Fragment } from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
export const ItemListContainer =({greeting}) =>{
    return(
        <Fragment>
       <Title greeting= 'Tu nuevo Superpoder'/>
        <ItemCount ></ItemCount>
        </Fragment>
    );
}
export default ItemListContainer;