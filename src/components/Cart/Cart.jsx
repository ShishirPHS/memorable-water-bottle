import PropTypes from "prop-types";
import "./Cart.css";

const Cart = ({ cart, removeFromLocalStorage }) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <div>
        {cart.map((bottle) => (
          <div className="cart-container" key={bottle.id}>
            <img src={bottle.img}></img>
            <button onClick={() => removeFromLocalStorage(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromLocalStorage: PropTypes.func.isRequired,
};

export default Cart;
