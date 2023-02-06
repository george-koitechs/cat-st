import { Link } from "react-router-dom";

import logo from "@/assets/images/catstreet-logo.svg";
import { Checkout } from "@/components/checkout/checkout.component";

import "./checkout.page.styles.scss";

export const CheckoutPage = () => {
  return (
    <div className="checkoutPage">
      <div className="container">
        <Link to="/" className="checkoutPage__link">
          <img src={logo} alt="Cat st." />
        </Link>
        <h1 className="checkoutPage__title">Checkout</h1>
        <Checkout />
      </div>
    </div>
  );
};
