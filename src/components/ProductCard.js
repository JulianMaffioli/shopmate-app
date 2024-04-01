import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

export const ProductCard = ({
  productID,
  productName,
  productPrice,
  productImage,
}) => {
  // eslint-disable-next-line
  const [cart, cartCount, addToCart, updateCart, deleteAllItems, deleteProductFromCart,] = useCart();

  return (
    <div
      className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3'
      key={productID}>
      {/* Product Image */}
      <div>
        <img
          className='rounded-t-lg w-100 h-200 object-cover'
          src={productImage}
          alt='Product'
        />
      </div>

      <div className='p-5'>
        {/* Product Name */}
        <Link href='#'>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {productName}
          </h5>
        </Link>

        <div className='flex flex-row justify-between'>
          {/* Product Price */}
          <p className='mb-3 pt-3 font-bold text-gray-600 dark:text-gray-400 text-center items-center'>
            ${productPrice}
          </p>

          {/* Add Cart Button */}
          <Link
            href='#'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() =>
              addToCart(productID, productName, productPrice, productImage)
            }>
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};
