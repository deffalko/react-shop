import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
  const {
    id,
    name,
    description,
    mainStats,
    images,
    // addToBasket = Function.prototype,
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card deep-purple lighten-3" id={id}>
      <div className="card-image">
        <img src={images.background} alt="backround" />
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn light-blue darken-4"
          onClick={() =>
            addToBasket({
              id,
              name,
              mainStats,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {mainStats.ClipSize}$
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
