import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles , setBottles] = useState([])
    const [cart , setCart] = useState([]);

    useEffect(()=>{
        fetch('bottels.json')
        .then(res => res.json())
         .then(data => setBottles(data))
     },[])

    //load cart from local Storage
    useEffect(()=>{
       console.log('called the useEffect', bottles.length);

       if(bottles.length > 0){
             const storedCard = getStoredCart();
              console.log(storedCard);
             const savedCart = [] ;
            for(const id of storedCard){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle){
                    savedCart.push(bottle)
                }
            }
            console.log('saved cart',savedCart)
            setCart(savedCart);
          
       }
    },[bottles])
    
     const handleAddToCart = (bottle) =>{
          
     const newCart = [...cart , bottle];
     setCart(newCart);
     addToLS(bottle.id);
    }  
    
    const handleRemoveFromCart = (id) => {
         const remainingCart = cart.filter(bottle => bottle.id !==id);
         setCart(remainingCart);
         
        //visual cart remove
        // remove frome ls
         removeFromLS(id);
    }

    
    return (
        <div>
            <h2>Bottles Availaabl : {bottles.length}</h2>
            <Cart cart = {cart} 
             handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
            {
                bottles.map((bottle) => (
                <Bottle 
                    key={bottle.id}
                     bottle={bottle}
                     handleAddToCart = {handleAddToCart}
                     />))
            }
            </div>
        </div>
    );
};

export default Bottles;