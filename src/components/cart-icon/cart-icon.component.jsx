import { CartIconContainer, ShopIcon, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
