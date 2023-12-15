import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'
import all_product from '../Assets/all_product'
import sizechart from '../Assets/sizechart.png'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>NEW IN TOWN</h1>
        <hr />
        <div className="popular-item">
          {/* <img src={sizechart} alt="" /> */}
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image}new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}

export default Popular