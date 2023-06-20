import { Fragment } from "react";
import Header from "./components/Layout/Header";

import Shirts from './components/Shirts/Shirts';
import CartProvider from "./Context/CartProvider";


const App = ()=> {
  return (
    <Fragment>
        <Header></Header>
        <main>
          <Shirts></Shirts>
        </main>
        <CartProvider></CartProvider>

    </Fragment>
  )
}
export default App;