import React from "react";
import { shallow } from "zustand/shallow";

import { ICartItem } from "@/zustand/cart.types";
import { useCartStore } from "@/zustand/cart.store";
import { numberWithCommas } from "@/components/cart/cart-total.component";

import "./cart-item.styles.scss";

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [addItem, removeItem] = useCartStore((state) => [state.addItem, state.removeItem], shallow);

  function add() {
    addItem(item);
  }
  function remove() {
    removeItem(item);
  }
  return (
    <div className="cartItem">
      <img src={item.image} alt={item.name} className="cartItem__image" />
      <div className="cartItem__content">
        <h6 className="cartItem__name">{item.name}</h6>
        <div className="cartItem__info">
          <div className="cartItem__quantityBox">
            <span className="cartItem__quantity cartItem__quantity_action cartItem__quantity_remove" onClick={remove}>
              -
            </span>
            <span className="cartItem__quantity">{item.quantity}</span>
            <span className="cartItem__quantity cartItem__quantity_action cartItem__quantity_add" onClick={add}>
              +
            </span>
          </div>
          <div className="cartItem__price">{numberWithCommas(parseInt(item.price) * item.quantity)}</div>
        </div>
      </div>
    </div>
  );
};
