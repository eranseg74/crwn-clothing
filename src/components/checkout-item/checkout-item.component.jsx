import {
  CheckoutItemContainer,
  ImageContainer,
  Properties,
  Arrow,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, price, quantity, imageUrl } = checkoutItem;
  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(CartContext);
  const removeItemHandler = () => removeItemFromCart(checkoutItem);
  const clearItemHandler = () => clearItemFromCart(checkoutItem);
  const addItemHandler = () => addItemToCart(checkoutItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Properties>{name}</Properties>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Properties>{price}</Properties>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
