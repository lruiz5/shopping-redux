import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import Stock from "../assets/images/1001.jpg";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, poster_path } = product;
  const poster = poster_path ? `../assets/images/${poster_path}` : Stock;
  return (
    <div className="cartCard">
      <div className="">
        <img className="" src={poster} alt="" />
      </div>
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button
          type="button"
          class=""
          onClick={() => dispatch(remove(product))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
