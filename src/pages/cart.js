import { useSelector } from "react-redux";
import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Cart = ({ title }) => {
  useTitle(title);
  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length} / ${total}
        </h1>
        <div>
          {products.map((item) => (
            <CartCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
};
