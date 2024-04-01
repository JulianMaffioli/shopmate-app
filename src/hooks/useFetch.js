import { useEffect, useState } from "react";
import products from "../data/db.json"

export const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(products.products)

  }, []);

  return { data };
};
