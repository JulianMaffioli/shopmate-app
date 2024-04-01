import error from "../assets/404.png";


export const PageNotFound = () => {
  return (
    <main>
       <div className="flex justify-center items-center text-center place-self-center flex-col py-4">
      <img src={error} alt='Empty cart' className="max-w-full h-auto size-96"/>
      <h4 className="text-2xl font-bold-2 py-6">What are you looking for?... </h4>
      <p>
       
      </p>
    </div>
    </main>
  );
};
