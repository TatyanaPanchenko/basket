import Basket from "../components/Basket/Basket";
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
