import { useState } from "react";
import "./Item.css";

const Item = (props) => {
 let totalProductInCart = () =>{
  props.incChildHandler();
}

  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button
        onClick={() => {
        
       totalProductInCart();
       
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default Item;


