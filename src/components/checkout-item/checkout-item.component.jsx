import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, price, quantity, imageUrl } = checkoutItem;
  const { addItemToCart, reduceItemQuantityFromCart, removeItemFromCart } =
    useContext(CartContext);
  const deleteItem = () => {
    removeItemFromCart(checkoutItem);
  };
  const reduceItemQuantity = () => {
    reduceItemQuantityFromCart(checkoutItem);
  };
  const addCartItem = () => {
    addItemToCart(checkoutItem);
  };
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="checkout-item-details">
        <span className="name">{name}</span>
        <span className="quantity">
          <span className="clicked-icon" onClick={reduceItemQuantity}>
            &#10094;
          </span>{" "}
          {quantity}{" "}
          <span className="clicked-icon" onClick={addCartItem}>
            &#10095;
          </span>
        </span>
        <span className="price">{price}</span>
        <span className="clicked-icon" onClick={deleteItem}>
          &#10005;
        </span>
      </div>
      <hr />
    </div>
  );
};

export default CheckoutItem;
