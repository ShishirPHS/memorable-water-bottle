import PropTypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>Bottle: {name}</h3>
      <img className="bottle-img" src={img} alt="" />
      <h4>Price: {price}</h4>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Bottle;
