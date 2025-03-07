// import { useState, useEffect } from "react";
import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {
  // const { name = "", closeAlert = Function.prototype } = props;
  const { alertName: name = "", closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    }; //eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} Добавлен в корзину</div>
    </div>
  );
}

export { Alert };
