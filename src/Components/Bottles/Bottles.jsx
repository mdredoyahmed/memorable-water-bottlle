import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localstorage";


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

       if(bottles.length > 0 ){
             const storedCard = getStoredCart();
             console.log(storedCard);
       }
    },[])
    
     const handleAddToCart = (bottle) =>{
          
     const newCart = [...cart , bottle];
     setCart(newCart);
     addToLS(bottle.id);
    }     
    return (
        <div>
            <h2>Bottles Availaabl : {bottles.length}</h2>
            <h4>Cart : {cart.length}</h4>
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