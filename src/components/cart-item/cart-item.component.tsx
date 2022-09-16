import {
  CartItemContainer,
  ItemDetails,
  Image,
  Name,
} from "./cart-item.styles";

import { FC } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemProps = { cartItem: TCartItem };

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
