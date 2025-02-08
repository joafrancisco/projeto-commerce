import { ProdctType } from "@/types/ProductTypes";
import Product from "./componentes/Product";
async function getProduct() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {throw new Error('Failed to fetch Products')}

  return res.json()
}

export default async function Home() {
  const product = await getProduct();


  
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {product.map((product:ProdctType) => (
          <Product key={product.id} product={product} />
        ))};
      </div>
      <h1>Projeto-Commerce</h1>
    </div>
  );
}
