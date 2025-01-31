import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle ,handleAddToCart }) => {
    console.log(handleAddToCart);

   const {name , id , img , price } = bottle;
 
    return (
        <div className="bottle">
            <h3>Bottle : {bottle.name}</h3>
            <p>ID : {bottle.id}</p>
            <img src={img} alt="" />
            <p>price:${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>purchase</button>
        </div>
    );
};


Bottle.propTypes = {
    bottle :PropTypes.object.isReqired,
    handleAddToCart: PropTypes.func.isReqired
}
export default Bottle;