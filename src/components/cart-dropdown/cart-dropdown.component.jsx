import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartDropdownContainer,
  CartItems,
  CartDropdownButton,
} from "./cart-dropdown.styles";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <CartDropdownButton onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
