import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components";

export const Home = () => {
  const { data: products } = useFetch();
  

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-center'>
          {products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                productID={product.id}
                productName={product.name}
                productPrice={product.price}
                productImage={product.image}
              />
            ))}
        </div>
      </section>
    </main>
  );
};
