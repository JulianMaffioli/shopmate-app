export const Footer = () => {
  const date = new Date();

  return (
    <footer className="p-4">
      <div className='max-w-screen-xl flex flex-wrap justify-center mx-auto items-center border-t border-gray-200 py-2 text-center text-slate-500 text-sm'>
        © {date.getFullYear()} - Shopping Cart
      </div>
    </footer>
  );
};
