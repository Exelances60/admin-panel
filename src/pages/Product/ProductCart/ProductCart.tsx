import React, { useState, FC } from "react";
import { Button, Drawer } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { dataProps } from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import i18next from "i18next";
import { DefaultStyles } from "../../../utils/DefaultStyles/DefaultStyles";

type ProductCartProps = {
  cart: dataProps[];
};

const ProductCart: FC<ProductCartProps> = ({ cart }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={DefaultStyles.card.cartButton} onClick={showDrawer}>
        <ShoppingCartOutlined className="text-black" />
      </Button>
      <Drawer
        title={i18next.t("CART")}
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {cart.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </Drawer>
    </>
  );
};

export default ProductCart;
