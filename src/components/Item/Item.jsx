// import { useState } from "react";
// import style from "./item.module.scss";
// import createUniqueID from "../../createUniqueID";

// export default function Item(props) {
//   console.log(props.count);
//   console.log(props.data.price);
//   const getTotalPrice = () => {
//     return props.count * props.data.price;
//   };
//   console.log(getTotalPrice());
//   return (
//     <div className={style["basket-item"]} key={createUniqueID()}>
//       <div className={style["item-about"]} key={createUniqueID()}>
//         <div className={style["item-img"]} key={createUniqueID()}>
//           <img src={props.data.img} alt="basket-image" />
//         </div>
//         <div className={style["item-description"]} key={createUniqueID()}>
//           <div className={style["item-name"]} key={createUniqueID()}>
//             {props.data.name}
//           </div>
//           <div className={style["item-weight"]} key={createUniqueID()}>
//             {props.data.weight}
//           </div>
//           <div className={style["item-price"]} key={createUniqueID()}>
//             {props.data.price}₽
//           </div>
//         </div>
//       </div>
//       <div className={style["item-counter"]} key={createUniqueID()}>
//         <button
//           onClick={() => props.decreaseCount(props.index)}
//           className={style.decrease}
//           key={createUniqueID()}
//         >
//           -
//         </button>
//         <div className={style.quantity} key={createUniqueID()}>
//           {props.count}
//         </div>
//         <button
//           onClick={() => props.increaseCount(props.index)}
//           className={style.increase}
//           key={createUniqueID()}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }
