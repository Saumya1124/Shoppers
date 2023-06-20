import classes from './ShirtItemForm.module.css';
import CartContext from '../../Context/cart-context';

import { useState , useRef, Fragment, useContext} from 'react';
const ShirtItemForm = (props)=> {

    
  const ctx = useContext(CartContext)

  const submitHandler = (e) => {
      e.preventDefault()
      props.onAddToCart()
  }
    
  
    

    const [countLarge , setCountLarge] = useState(100)

    const [countMedium , setCountMedium] = useState(30)

    const [countSmall , setCountSmall] = useState(10)

    const largeCount = ()=> {
      setCountLarge(countLarge-1)
    }

    const mediumCount = ()=> {
        setCountMedium(countMedium-1)
    }

    const smallCount = ()=> {
        setCountSmall(countSmall-1)
    }

    return(

        <Fragment>
               <form onSubmit={submitHandler}>
                  <button onClick={largeCount}>Large {countLarge}</button>
                  <button onClick={mediumCount}>Medium {countMedium}</button>
                  <button onClick={smallCount}>Small {countSmall}</button>
                
               </form>
                 
        </Fragment>

    )
}

export default ShirtItemForm