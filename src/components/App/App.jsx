import Basket from "../Basket/Basket";
import data from "../data/data.json";

import "./app.module.scss";

function App() {
  return (
    <>
      <Basket data={data} />
    </>
  );
}

export default App;
