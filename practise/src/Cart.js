import React from 'react'
import Cartitem from './Cartitem'

 const Cart =(props)=> {
    const {products}=props
  

    
    return (
        <div className="cart">
          
            {products.map((product)=>{
                 return  <Cartitem product={product} key={product.id} OnIncrease={props.OnIncrease} OnDecrease={props.OnDecrease} OnDelete={props.OnDelete}/> 
            })} 
            
            
        </div>
    )
}
export default Cart