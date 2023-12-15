import React from 'react'
import './NewCollection.css'
import all_products from '../Assets/all_product'
import Item from '../Items/Item'
const NewCollection = () => {
  return (
    <div className='new-collection'> 
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="collections">
    {all_products.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
    })}
    </div>
    </div>
  )
}

export default NewCollection;