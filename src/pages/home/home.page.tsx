import { useCartStore } from "@/zustand/cart.store";
import { ICartItem } from "@/zustand/cart.types";
import { creamItem, oliveItem } from "@/mockItems";

export const HomePage = () => {
  const openCart = useCartStore((state) => state.open);
  const addItem = useCartStore((state) => state.addItem);

  function addItemToCart(item: ICartItem) {
    addItem(item);
    openCart();
  }

  return (
    <>
      <h1>Add items to cart. It's dynamic! :)</h1>
      <div style={{ display: "grid", gap: 10, maxWidth: 300, padding: 50 }}>
        <button onClick={openCart}>Open Cart</button>
        <button onClick={() => addItemToCart(creamItem)}>Add creme</button>
        <button onClick={() => addItemToCart(oliveItem)}>Add olive</button>
      </div>
    </>
  );
};
