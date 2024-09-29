import { useState } from "react";
import style from "./basket.module.scss";
import createUniqueID from "../../createUniqueID";

export default function Basket(props) {
  console.log(props.data.price);
  const [count, setCount] = useState([10, 4, 13]);
  const newCount = [...count];
  console.log(newCount);
  const countSum = newCount.reduce((acc, el) => acc + el, 0);
  const [total, getTotal] = useState(countSum);

  function decreaseCount(index) {
    const countItem = [...count];
    setCount(countItem[index] - 1);
  }
  // function increaseCount(index) {
  //   setCount([...(count[index] + 1)]);
  // }
  const getTotalPrice = (quantity, price) => {
    return quantity * price;
  };
  console.log(getTotalPrice());
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
              const itemSum = getTotalPrice(count[index], item.price);
              console.log(index);
              // let sum += itemSum;
              console.log(itemSum);
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
            <div className={style["basket-totalPrice"]}>{getTotalPrice()}₽</div>
          </div>

          <button className={style["basket-order"]}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
