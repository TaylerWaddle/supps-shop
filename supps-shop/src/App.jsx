import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} /> */}
      </Route>
    </Routes>

    // <h1>Pure Apex</h1>
    // <h4>Power Supplements</h4>
    // <h1>Popular Products</h1>
    // <div>
    //   <h3>Joker Pre-Workout</h3>
    //   <p>
    //     Unleash your inner beast with Joker Pre Workout! Maximize energy,
    //     focus, and endurance with this powerful blend. Experience explosive
    //     power and razor-sharp concentration with every scoop. Elevate your
    //     performance and dominate your training sessions. Get ready to laugh at
    //     your limits!
    //   </p>
    //   <img></img>
    // </div>
    // <h1>About Us</h1>
  );
}

export default App;
