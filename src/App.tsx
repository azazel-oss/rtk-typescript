import "./App.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div>
      <Modal />
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
