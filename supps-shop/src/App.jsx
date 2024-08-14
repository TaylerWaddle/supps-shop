import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation.component";
import Cart from "./routes/cart.component";
import Shop from "./routes/shop.component";
import Home from "./routes/home.component";
import SignIn from "./routes/sign-in.component";
import SignUp from "./routes/sign-up..component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="sign-in" element={<SignIn />}></Route>
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
