import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex w-[100vw] justify-around">
      <div>
        {items.map((each, index) => (
          <h1 className="p-3" key={index}>
            {each}
          </h1>
        ))}
        <button
          className="bg-blue-500 rounded-lg p-2 m-4 text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
