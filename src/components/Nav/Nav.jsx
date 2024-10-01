import style from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style["nav-items"]}>
        <div className={style["nav-item"]}>
          <div className={style["item-img"]}></div>
          <div className={style["item-name"]}>Бургеры</div>
        </div>
      </div>
    </nav>
  );
}
