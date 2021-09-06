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
              qty:10,
              id:902,
          }
            ]}
        }
      increase=(product)=>{
        console.log("Increase")
         const {products}=this.state
      
        const index= products.indexOf(product)
        products[index].qty+=1
        this.setState({
            products
        })
        
    }
    decrease=(product)=>{
        const {products}=this.state
        const index=products.indexOf(product)
        if(products[index].qty==0){
            return
        }
        products[index].qty-=1

        this.setState({
            products
        })
    
    }
    delete=(id)=>{
        const {products}=this.state
        const index=products.filter((item)=>item.id!==id)
        this.setState({
            products:index
        })


    }
    total=()=>{
        const{products}=this.state
        let cartTotal=0
        products.map((product)=>{
          cartTotal=cartTotal+product.qty*product.price
        })
        return cartTotal
    
    }
      render(){

      const {products}=this.state
    return (
        <div className='cart'>
           
            {products.map((product)=>{
                return  <Cartitem product={product} key={product.id} OnIncrease={this.increase} onDecrease={this.decrease} onDelete={this.delete}/>
            })}
            <div>TOTAL:{this.total()}</div>
            
            
        </div>
    )
}
}
