import React from 'react'

const  Cartitem = (props)=> {

      const {price  ,qty , title}=props.product
      const {product , OnIncrease,OnDecrease,OnDelete}=props
  
      return (
        <div className='cart-item'>
        <div className='left-block'>
          <img style={styles.image}></img>
        </div>
        <div className='right-block'>
   
          <div style={{fontSize:25}}>{title}</div>
          <div style={{color:'#777'}}>Rs:-{price}
          </div>
        
          <div style={{color:'#777'}}>Qty:-{qty}</div>
          <div className='cart-item-actions'>
            <img alt="increase"  className='action-icons' onClick={()=>props.OnIncrease(props.product)}  src='https://image.flaticon.com/icons/png/512/1237/1237946.png'/>
            <img alt="decrease"  className='action-icons' onClick={()=>props.OnDecrease(props.product)} src='https://image.flaticon.com/icons/png/512/56/56889.png'/>
            <img alt="delete"  className='action-icons' onClick={()=>props.OnDelete(product.id)} src='https://image.flaticon.com/icons/png/512/1214/1214428.png'/>
            
          </div>
        </div>
       </div>
        
      );
      
  }  

//now we will adding state to our component
//basically state is adding local data to our component
const styles={
  image:{
    height:110,
    width:110,
    borderRadius:4,
    background:'#ccc',
    
  }
}

export default Cartitem