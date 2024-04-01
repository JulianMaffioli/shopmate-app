import { CartItemCount } from "../components";
import { useCart } from "../hooks/useCart";

export const CartCard = ({ product, itemCount }) => {
  // eslint-disable-next-line
  const [cart, cartCount, addToCart, updateCart, deleteAllItems, deleteProductFromCart] = useCart(); //Using custom Hook to get cartCount

  return (
    <div className='w-full p-4 my-4 other:flex-col other:items-center other:py-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex justify-between'>
      {/* Product Image */}
      <div className='w-32 rounded-xl'>
        <img src={product.productImage} alt='product' className='rounded-xl' />
      </div>

      {/* Title */}
      <h6 className='mb-2 h-20 w-96 text-2xl other:h-auto other py-2  other:text-lg items-center justify-start other:justify-center sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse text-gray-900 dark:text-white'>
        {product.productName}
      </h6>

      {/* Price */}
      <p className='mb-5 w-60 text-base items-center justify-start  sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse text-gray-500 sm:text-lg dark:text-gray-400'>
        Price: ${product.productPrice}
      </p>

      <div className='flex'>
        {/* CartItemCount */}
        <div className='items-center justify space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse'>
          <CartItemCount product={product} />
        </div>

        {/* Delete Item Button */}
        <div className='flex items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse'>
          <button
            className='flex items-center justify-center bg-red-500 hover:bg-red-600 border rounded text-white mx-2 text-center px-3.5 py-3.5'
            onClick={() => deleteAllItems(product.productID)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='w-5 h-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
