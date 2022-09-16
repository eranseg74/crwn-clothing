import { FC } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  Properties,
  Arrow,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";

type CheckoutItemProps = {
  checkoutItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, quantity, imageUrl } = checkoutItem;

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, checkoutItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem));
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
