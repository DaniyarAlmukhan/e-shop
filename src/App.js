import Home from "./routes/home/Home";
import { Routes, Route } from 'react-router-dom'
import { Navigation } from "./routes/navigation/Navigation";
import Auth from "./routes/auth/Auth";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
