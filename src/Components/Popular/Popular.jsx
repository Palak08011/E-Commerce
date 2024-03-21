import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import data_product from "../Assets/data";
const Popular = (props) => {
  return (
    <div className="popular">
      {data_product.map((item) => {
        return (
          <Item
            incChildHandler={props.data}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
export default Popular;
