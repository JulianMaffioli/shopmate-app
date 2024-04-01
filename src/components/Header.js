import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/logo.png";

import { useCart } from "../hooks/useCart";

export const Header = () => {
  // eslint-disable-next-line
  const [cart, cartCount, addToCart, updateCart, deleteAllItems, deleteProductFromCart,] = useCart();

  const activeClass =
    "link p-3 bg-gray-300 hover:bg-gray-400 rounded-md gap-3 mx-1";
  const inactiveClass =
    "link p-3 bg-white border border-gray-300 hover:bg-gray-100 rounded-md gap-3 mx-1";

  return (
    <header>
      <nav className='navigation p-4'>
        <div className='max-w-screen-xl flex flex-wrap justify-between mx-auto items-center border-b border-gray-200 py-2 other:justify-center other:flex-col'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse justify-self-start'>
            <img src={Logo} alt='logo' className='h-12' />
            <span className='self-center text-2xl whitespace-nowrap dark:text-white'>
              Shopping Cart
            </span>
          </Link>

          <div className='other:p-4'>
            {/*  Home */}
            <NavLink
              to='/'
              //className='link'
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              end>
              Home
            </NavLink>

            {/* Cart */}

            <NavLink
              to='/cart'
              //className='link'
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }>
              <span>Cart</span>
            </NavLink>
          </div>

          {/* Cart Count */}
          <span className='justify-self-end'> Cart : {cartCount}</span>
        </div>
      </nav>
    </header>
  );
};
