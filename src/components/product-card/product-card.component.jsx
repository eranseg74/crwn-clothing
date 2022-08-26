import {
  ProductCardContainer,
  Price,
  Name,
  Footer,
  Img,
  CardButton,
} from "./product-card.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CardButton onClick={addProductToCart}>Add to cart</CardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
