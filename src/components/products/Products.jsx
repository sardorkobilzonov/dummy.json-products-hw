import React, { useEffect, useState } from "react";
import { request } from "../../api";
import Loading from "../loading/Loading";

const Products = () => {
  const limit = 10;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    request
      .get("/products", {
        params: {
          limit,
          skip: count * limit,
        },
      })
      .then((res) => setProducts([...products, ...res.data.products]))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  return (
    <>
      <div>
        {loading && <Loading count={limit} />}
        <div className="container mx-auto grid grid-cols-5 gap-3 pt-20">
          {products?.map((product) => (
            <div key={product.id} className="p-4 shadow-md">
              <img
                src={product.thumbnail}
                className="h-[250px]"
                alt={product.title}
              />
              <h2 className="flex items-center">{product.title}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>

        {loading && <Loading count={limit} />}

        <button
          className="block mx-auto mt-4 mb-10"
          onClick={() => setCount(count + 1)}
        >
          See more
        </button>
      </div>
    </>
  );
};

export default Products;
