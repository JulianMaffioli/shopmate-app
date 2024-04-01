import { useCart } from "../hooks/useCart";

export const CartItemCount = ({ product }) => {
  // eslint-disable-next-line
  const [cart, cartCount, addToCart, updateCart, deleteAllItems, deleteProductFromCart,] = useCart();

  //Functions to Modify Local Storage
  const handlePlusButton = () => {
    addToCart(
      product.productID,
      product.productName,
      product.productPrice,
      product.productImage
    );
  };

  const handleLessButton = () => {
    deleteProductFromCart(product.productID)
  };

  return (
    <div>
      {/* item count */}
      {/* + Button */}
      <div className='w-15 h-12  rounded-xl flex flex-row'>
        <button
          className='px-2 bg-gray-400 hover:bg-gray-500 rounded-l text-white'
          onClick={handlePlusButton}>
          +
        </button>

        {/* Item Count Input */}
        <input
          type='text'
          className='w-10 border  text-center disabled:opacity-100 text-black'
          value={product.count ? product.count : 1}
          disabled
        />

        {/* - Button */}
        <button
          className='px-2 bg-gray-400 hover:bg-gray-500 rounded-r text-white'
          onClick={handleLessButton}>
          -
        </button>
      </div>
    </div>
  );
};
