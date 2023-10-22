import React, { FC } from "react";
import { Avatar, Card } from "antd";
import { DefaultStyles } from "../../../utils/DefaultStyles/DefaultStyles";
import { dataProps } from "../../../types/FetchDataTypes/FetchDataTypes";
const { Meta } = Card;

type ProductCardProps = {
  item: dataProps;
  setCart?: React.Dispatch<React.SetStateAction<dataProps[]>>;
};

const ProductCard: FC<ProductCardProps> = ({ item, setCart }) => {
  return (
    <>
      <Card
        style={{ width: 250, height: 310 }}
        cover={
          <img
            alt="example"
            className="object-contain h-52 rounded-lg w-full"
            src={item.image}
          />
        }
        onClick={() => setCart && setCart((prev) => [...prev, item])}
        className={DefaultStyles.card.cardComponet}
      >
        <Meta
          avatar={<Avatar src={item.image} />}
          title={item.title}
          description={
            <p className={DefaultStyles.product.priceP}>${item.price}</p>
          }
        />
      </Card>
    </>
  );
};

export default ProductCard;
