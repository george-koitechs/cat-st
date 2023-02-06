import React from "react";
import classNames from "classnames";
import { shallow } from "zustand/shallow";

import { useCartStore } from "@/zustand/cart.store";

import "./cart-total.styles.scss";

export function numberWithCommas(x: number) {
  return x
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface CartTotalProps extends React.HTMLProps<HTMLDivElement> {
  withMT?: boolean;
}

export const CartTotal: React.FC<CartTotalProps> = (props) => {
  const [shippingCost, discount, items] = useCartStore(
    (state) => [state.shippingCost, state.discount, state.items],
    shallow
  );

  const subtotal = items.reduce((a, c) => {
    a = a + parseInt(c.price) * c.quantity;
    return a;
  }, 0);
  const total = subtotal + parseInt(shippingCost ?? "0") - discount;

  return (
    <div className={classNames("cartTotal", props.className)}>
      <div className="cartTotal__row">
        <p className="cartTotal__title">Subtotal</p>
        <p className="cartTotal__content">${numberWithCommas(subtotal)}</p>
      </div>

      <div className="cartTotal__row">
        <p className="cartTotal__title">Shipping</p>
        <p className="cartTotal__content">{shippingCost === null ? "calculated next step" : `$${shippingCost}`}</p>
      </div>

      {!!discount && (
        <div className="cartTotal__row">
          <p className="cartTotal__title">Discounts</p>
          <p className="cartTotal__content">-${numberWithCommas(discount)}</p>
        </div>
      )}

      <div className={classNames("cartTotal__row", { cartTotal__row_total: props.withMT })}>
        <p className="cartTotal__title cartTotal__title_big">TOTAL</p>
        <p className="cartTotal__content">
          <span className="cartTotal__currency">AUD</span>
          <span className="cartTotal__total">${numberWithCommas(total)}</span>
        </p>
      </div>
    </div>
  );
};
