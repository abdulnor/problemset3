import { useState } from "react";
function Card({img , name , updateTItal}  ) {
    const [state , setState] = useState (
        {
          init : 0 ,
          initcard:0,
          bu1 :"add to cart" ,        
          bu2 :" remove from cart " 
        } 
      ); 
      function handleClick1(event) {
        setState((state) => (
          {
           
            ...state ,
            bu1 : 'added to cart ' ,
            bu2:'remove from cart' ,
            initcard : state.initcard + 1 ,
            init : state.init +1 ,
            
          }
        ))
        updateTItal(1)
      };
      function handleClick2(event)
      {
        setState((state) => (
          {
            ...state ,
            bu1: 'add to cart' ,
            bu2 : 'removed from cart',
            init : state.init - 1 ,
            initcard : state.initcard - 1 
          }
        ))
        updateTItal(-1)
      };


        return(
        <div className='card1'>
                <img src={img} />
                <div className='div-inside'> 
                <h3> {name} ( {state.initcard} in cart )</h3>
                <p>24$</p> 
                <button onClick={handleClick1}> {state.bu1} </button> <br/>
                <br/>
                <button onClick={handleClick2}> {state.bu2} </button>
                </div>
            </div>
        )
}
export default Card;