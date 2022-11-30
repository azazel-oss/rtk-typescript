import "./App.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className={"loading"}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <Modal />
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
