import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

function Modal() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  return (
    <aside
      className={"modal-container"}
      style={{ display: `${isOpen ? "flex" : "none"}` }}
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      <div className={"modal"} onClick={(e) => e.stopPropagation()}>
        <h4>Remove all items from shopping cart?</h4>
        <div className={"btn-container"}>
          <button
            className={"btn confirm-btn"}
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            className={"btn clear-btn"}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
