import React from "react";
import { CartIcon } from "../data/icons";
import { useAppSelector } from "../app/hooks";

function Navbar() {
  const { amount } = useAppSelector((state) => state.cart);
  return (
    <nav>
      <div className={"nav-center"}>
        <h3>redux toolkit</h3>
        <div className={"nav-container"}>
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
