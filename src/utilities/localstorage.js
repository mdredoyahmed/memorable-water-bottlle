const getStoredCart = () => {
 const storedCartString = localStorage.getItem('cart')
 if (storedCartString){
    return JSON.parse(storedCartString)
 }
 return [] ;
}
   
const saveCartTols = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart' cartStringified );
}

 
const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id) ;
    // save to local storage
    sacveCartTols(cart);
}
export {addToLS ,getStoredCart}