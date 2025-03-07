import { useContext } from "react";
import { ShopContext } from "../context";

import { GoodsItem } from "./GoodsItem";

function GoodsList() {
  const { goods = [] /*addToBasket = Function.prototype not reducer*/ } =
    /*props;*/ useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  const limitedGoods = goods.slice(0, 12);

  return (
    <div className="goods">
      {limitedGoods.map((item) => (
        <GoodsItem
          key={item.id}
          {...item} /*addToBasket={addToBasket} это без reducer*/
        />
      ))}
    </div>
  );
}

export { GoodsList };
