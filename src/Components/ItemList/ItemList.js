import React, { useState } from 'react';
import Item from '../Item/Item.js';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js';
import { ItemCount } from '../ItemCount/ItemCount.js';

const ItemList = (({items}) => {
    const onAdd = () => {console.log("llamado a onAdd")}
    const onSubstract = () => {console.log("llamado a onSubstract")}
    return(
        <div className="items">
            {items.map((item, i) => {
                return(
                    <div className="card" key={i}>
                        <div className="card-body">
                        <Item key={i} id={item.id} name={item.name} img={item.img} price={item.price} description={item.description}></Item>
                        <ItemCount stock={item.stock} onAdd={() => onAdd()} onSubstract={() => onSubstract()}></ItemCount>
                        </div>
                    </div>
                );
            })}
        </div>
    )
})

export default ItemList;