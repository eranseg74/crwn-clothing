import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="product">Product</span>
        <span className="description">Description</span>
        <span className="quantity">Quantity</span>
        <span className="price">Price</span>
        <span className="remove">Remove</span>
      </div>
      <hr />
      <div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
