import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation.component";
import Home from "./routes/home.component";
import Auth from "./routes/auth.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="auth" element={<Auth />} />
      {/* <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} /> */}
    </Routes>
  );
}

export default App;
