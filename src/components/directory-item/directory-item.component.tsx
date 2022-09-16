import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../directory/directory.component";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  Title,
  ShopNow,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <Title>{title}</Title>
        <ShopNow>Shop Now</ShopNow>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
