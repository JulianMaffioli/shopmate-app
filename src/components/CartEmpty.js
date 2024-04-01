import emptyCart from "../assets/emptyCart.png";
export const CartEmpty = () => {
  return (
    <div className="flex justify-center items-center text-center place-self-center flex-col ">
      <img src={emptyCart} alt='Empty cart' className="max-w-full h-auto size-96"/>
      <h4 className="text-2xl font-bold-2">Your Cart is Empty</h4>
      <p>
        Looks like you have not added anything, please go Home and add some
        items!
      </p>
    </div>
  );
};
