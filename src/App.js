import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChangedListener, createUserDocumentFromAuth, } from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/userAction";
import { useDispatch } from "react-redux";

import { Navigation } from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Auth from "./routes/auth/Auth";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async user => {
      if (user) { await createUserDocumentFromAuth(user); }
      dispatch(setCurrentUser(user))
    });
    return unsubscribe
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop/*' element={<Shop />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
