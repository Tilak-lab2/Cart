import React from 'react'
import Cartitem from './Cartitem'

export default class  Cart extends React.Component {
    constructor(){
        super()
        this.state={
            products:[{

            
              price:999,
              title:'Phone',
              qty:0,
              img:'',
              id:900,
          },{
              price:8900,
              title:'Washing Machine',
              qty:0,
              id:901,
          },{
              price:900,
              title:'Television',
              qty:0,
              id:902,
          }
            ]}
        }
      increase=()=>{
        console.log("Increase")
      
        this.setState({
            qty:this.state.qty+=1
        })
        
    }
      render(){

      const {products}=this.state
    return (
        <div className='cart'>
           
            {products.map((product)=>{
                return  <Cartitem product={product} key={product.id}/>
            })}
            
            
        </div>
    )
}
}
