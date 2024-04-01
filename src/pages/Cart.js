import { CartCard, CartEmpty } from "../components";
import { useCart } from "../hooks/useCart";

export const Cart = () => {
  // eslint-disable-next-line
  const [cart, cartCount, addToCart, updateCart, deleteAllItems, deleteProductFromCart,] = useCart(); //Using custom Hook to get cartCount

  return (
    <main>
      <section className='max-w-7xl mx-auto py-2'>
        <div className='max-w-7xl mx-auto py-2'>
          {cart.length > 0 ? (
            cart.map((product) => (
              <CartCard key={product.productID} product={product} />
            ))
          ) : (
            <CartEmpty />
          )}
        </div>
      </section>
    </main>
  );
};
