import { useEffect, useContext } from "react";
// import { useState, useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";

import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./alert";

function Shop() {
  const { loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  // const [goods, setGoods] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [order, setOrder] = useState([]);
  // const [isBasketShow, setBasketShow] = useState(false);
  // const [alertName, setAlertName] = useState("");

  //not reducer
  // const addToBasket = (item) => {
  //   const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...item,
  //       quantity: 1,
  //     };
  //     setOrder([...order, newItem]);
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });

  //     setOrder(newOrder);
  //   }
  //   setAlertName(item.name);
  // };

  // const removeFromBasket = (itemId) => {
  //   const newOrder = order.filter((el) => el.id !== itemId);
  //   setOrder(newOrder);
  // };

  // const incQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const decQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity >= 0 ? newQuantity : 0,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const handleBasketShow = () => {
  //   setBasketShow(!isBasketShow);
  // };

  // useEffect(function getGoods() {
  //   fetch(API_URL, {
  //     headers: {
  //       Authorization: API_KEY,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.weapons && setGoods(data.weapons);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.weapons);
      });
    //eslint-disable-next-line
  }, []);

  // const closeAlert = () => {
  //   setAlertName("");
  // };

  return (
    <main className="container content">
      <Cart quantity={order.length} /*handleBasketShow={handleBasketShow}*/ />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList /*goods={goods} addToBasket={addToBasket} not reducer*/ />
      )}
      {isBasketShow && (
        <BasketList
        /*order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}*/
        />
      )}
      {alertName && <Alert /*name={alertName}*/ /*closeAlert={closeAlert}*/ />}
    </main>
  );
}
export { Shop };
