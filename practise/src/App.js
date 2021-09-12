
// import Cartitem from './Cartitem';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app'
import 'firebase/firestore';

class  App extends React.Component {
  constructor(){
    super()
    this.state={
      products:[
       
      ]
    }
  }
  componentDidMount(){
    firebase
     .firestore()
     .collection('products')
     .onSnapshot((snapshot)=>{
       snapshot.docs.map((doc)=>{
         console.log(doc.data())
       })
       const products=snapshot.docs.map((doc)=>{
          const data=doc.data()
          data['id']=doc.id
          return data
       })
       console.log("Products")
       this.setState({
         products
       })
     })

  }
  
  getCartcount=()=>{
    console.log("HELLO")
    const {products}=this.state
    console.log("products---", products, this.state)
    let count=0;
    products.forEach((product)=>{
       count+=product.qty;
    })
    return count
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
    <div className="App">
      <Navbar cart={this.getCartcount()}/>
      <Cart products={products} OnIncrease={this.increase} OnDecrease={this.decrease} OnDelete={this.delete}/>
      <div style={{fontFamily:'cursive' , fontSize:26 ,padding:21 ,margin:1}}>TOTAL:-{this.total()}</div>
            
    </div>
    
  );
}
}

export default App;
