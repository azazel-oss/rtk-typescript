import React from "react";
import { ChevronDown, ChevronUp } from "../data/icons";
import { TItem } from "../data/cartItems";
import { useAppDispatch } from "../app/hooks";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

function CartItem({ id, img, title, price, amount }: TItem) {
  const dispatch = useAppDispatch();
  return (
    <article className={"cart-item"}>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className={"item-price"}>${price}</h4>
        <button
          className={"remove-btn"}
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div>
        <button className={"amount-btn"} onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className={"amount"}>{amount}</p>
        <button
          className={"amount-btn"}
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
