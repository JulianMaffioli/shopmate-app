import { Routes, Route } from "react-router-dom";
import { Cart, Home, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div >
      <Routes className="max-w-7xl mx-auto py-2 ">
        <Route path='/'  className='flex justify-start flex-wrap other:justify-evenly' element={<Home />} />
        <Route path='/cart' className='flex justify-start flex-wrap other:justify-evenly' element={<Cart />} />
        <Route path='*' className='flex justify-start flex-wrap other:justify-evenly' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
