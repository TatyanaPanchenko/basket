import { useState } from "react";
import style from "./basket.module.scss";
import createUniqueID from "../../createUniqueID";

export default function Basket(props) {
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
    <div className={style.basket}>
      <div className={style["basket-wrapper"]}>
        <div className={style["basket-top"]}>
          <div className={style["basket-title"]}>Корзина</div>
          <div className={style["basket-totalCount"]}>
            <span>{total}</span>
          </div>
        </div>
        <div className={style["basket-inner"]}>
          <div className={style["basket-items"]}>
            {props.data.map((item, index) => {
              return (
                <div className={style["basket-item"]} key={createUniqueID()}>
                  <div className={style["item-about"]} key={createUniqueID()}>
                    <div className={style["item-img"]} key={createUniqueID()}>
                      <img src={item.img} alt="basket-image" />
                    </div>
                    <div
                      className={style["item-description"]}
                      key={createUniqueID()}
                    >
                      <div
                        className={style["item-name"]}
                        key={createUniqueID()}
                      >
                        {item.name}
                      </div>
                      <div
                        className={style["item-weight"]}
                        key={createUniqueID()}
                      >
                        {item.weight}
                      </div>
                      <div
                        className={style["item-price"]}
                        key={createUniqueID()}
                      >
                        {item.price}₽
                      </div>
                    </div>
                  </div>
                  <div className={style["item-counter"]} key={createUniqueID()}>
                    <button
                      onClick={() => decreaseCount(index)}
                      className={style.decrease}
                      key={createUniqueID()}
                    >
                      -
                    </button>
                    <div className={style.quantity} key={createUniqueID()}>
                      {count[index]}
                    </div>
                    <button
                      onClick={() => increaseCount(index)}
                      className={style.increase}
                      key={createUniqueID()}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style["basket-bottom"]}>
          <div className={style["basket-total"]}>
            <span>Итого</span>
            <div className={style["basket-totalPrice"]}>
              {getTotalPrice(count, props.data)}₽
            </div>
          </div>

          <button className={style["basket-order"]}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
