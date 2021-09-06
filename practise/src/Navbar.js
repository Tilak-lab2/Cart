import React from "react";
 const Navbar=(props)=>{
     
    
        return(
            <>
            <div  style={styles.nav}>
               <div>

                   <div style={styles.cartIconConatiner}>
                    <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt="">
                    </img>
                    <span style={styles.cartCount}>{props.count}</span>
                   </div>
               </div>



            </div>
            </>
        )
    }

const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconConatiner:{
        postion:'relative',
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        postion:'absolute',
        right:0,
        top:-9
    }
  }
export default Navbar
