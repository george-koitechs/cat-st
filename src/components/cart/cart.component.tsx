import React from "react";
import classNames from "classnames";
import { useLocation, useNavigate, useResolvedPath } from "react-router-dom";
import { shallow } from "zustand/shallow";

import { useCartStore } from "@/zustand/cart.store";
import { CartItem } from "@/components/cart/cart-item.component";
import { CartPromo } from "@/components/cart/cart-promo.component";
import { CartAd } from "@/components/cart/cart-ad.component";
import { CartTotal } from "@/components/cart/cart-total.component";
import { Button } from "@/components/__ui-kit/button/button.component";

import "./cart.styles.scss";

export const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";
  const [isOpened, close, items] = useCartStore((state) => [state.isOpened, state.close, state.items], shallow);

  function goToCheckout() {
    navigate("/checkout");
    close();
  }

  return (
    <div className={classNames("cart", { cart_active: isOpened })}>
      <div className={classNames("cart__overlay", { cart__overlay_active: isOpened })} onClick={close}></div>
      <div className={classNames("cart__sidebar", { cart__sidebar_active: isOpened })}>
        <div className="cart__head">
          <button className="cart__close" onClick={close}>
            <span></span>
            <span></span>
          </button>
          <h6 className="cart__title">Your Cart</h6>
        </div>
        {!!items.length ? (
          <>
            <div className="cart__content">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <CartPromo />
              {isCheckoutPage && <CartAd className="cart__ad" />}
            </div>
            <CartTotal className="cart__total" />
            <Button variant="v2" className="cart__checkoutNow" onClick={goToCheckout}>
              Checkout now
            </Button>
          </>
        ) : (
          <p className="cart__empty">There’s nothing for your poor cat in your cart!</p>
        )}
      </div>
    </div>
  );
};
