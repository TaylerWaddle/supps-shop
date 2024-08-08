import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation.component";
import Home from "./routes/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      {/* <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} /> */}
    </Routes>
  );
}

export default App;
