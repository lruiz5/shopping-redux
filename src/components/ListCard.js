import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import Stock from "../assets/images/1001.jpg";
import "./ListCard.css";
import { useEffect, useState } from "react";

export const ListCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  const [inCart, setInCart] = useState(false);
  const { name, price, poster_path, id } = product;
  const poster = poster_path ? `../assets/images/${poster_path}` : Stock;

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === id);

    productInCart ? setInCart(true) : setInCart(false);
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={poster} alt="product poster" />
      <p className="name">{name}</p>
      <div className="action">
        <p className="price">${price}</p>
        {inCart ? (
          <button
            className="remove"
            type="button"
            onClick={() => dispatch(remove(product))}
          >
            Remove
          </button>
        ) : (
          <button type="button" onClick={() => dispatch(add(product))}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
