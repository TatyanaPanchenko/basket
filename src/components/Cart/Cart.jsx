import { useState } from "react";
import style from "./cart.module.scss";
import createUniqueID from "../../createUniqueID";

export default function cart(props) {
  const [count, setCount] = useState([1, 1, 1]);
  const [total, setTotal] = useState(3);

  function decreaseCount(index) {
    const newCount = [...count];
    if (newCount[index] > 0) {
      newCount[index] = newCount[index] - 1;
      const countSum = newCount.reduce((acc, el) => acc + el, 0);
      setCount(newCount);
      setTotal(countSum);
    } else return;
  }
  function increaseCount(index) {
    const newCount = [...count];
    newCount[index] = newCount[index] + 1;
    const countSum = newCount.reduce((acc, el) => acc + el, 0);
    setCount(newCount);
    setTotal(countSum);
  }
  const getTotalPrice = (count, data) => {
    const newArr = [];
    count.forEach((itemCount, indexCount) => {
      data.forEach((itemPrice, indexPrice) => {
        if (indexCount == indexPrice) {
          const sum = itemCount * Number(itemPrice.price);
          newArr.push(sum);
        }
      });
    });
    return newArr.reduce((acc, item) => acc + item);
  };
  return (
    <div className={style.cart}>
      <div className={style["cart-wrapper"]}>
        <div className={style["cart-top"]}>
          <div className={style["cart-title"]}>Корзина</div>
          <div className={style["cart-totalCount"]}>
            <span>{total}</span>
          </div>
        </div>
        <div className={style["cart-inner"]}>
          <div className={style["cart-items"]}>
            {props.data.map((item, index) => {
              return (
                <div className={style["cart-item"]} key={createUniqueID()}>
                  <div className={style["item-about"]}>
                    <div className={style["item-img"]}>
                      <img src={item.img} alt="cart-image" />
                    </div>
                    <div className={style["item-description"]}>
                      <div className={style["item-name"]}>{item.name}</div>
                      <div className={style["item-weight"]}>{item.weight}</div>
                      <div className={style["item-price"]}>{item.price}₽</div>
                    </div>
                  </div>
                  <div className={style["item-counter"]}>
                    <button
                      onClick={() => decreaseCount(index)}
                      className={style.decrease}
                    >
                      -
                    </button>
                    <div className={style.quantity}>{count[index]}</div>
                    <button
                      onClick={() => increaseCount(index)}
                      className={style.increase}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style["cart-bottom"]}>
          <div className={style["cart-total"]}>
            <span>Итого</span>
            <div className={style["cart-totalPrice"]}>
              {getTotalPrice(count, props.data)}₽
            </div>
          </div>

          <button className={style["cart-order"]}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
