import React from "react";
import Popular from "../Components/Popular/Popular";

const ShopCategory = (props) => {
  return (
    <div>
      <Popular data={props.incHandlerProp} />
    </div>
  );
};
export default ShopCategory;
