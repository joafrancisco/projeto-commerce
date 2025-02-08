import { ProdctType } from "@/types/ProductTypes";
import ProductImage from "./ProductImage";

type ProductProps = {
    product: ProdctType;
};

export default function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-lg h-96  bg-slate-800 p-5 text-gray-300">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product}  fill/>
            </div>
            <div className="flex justify-between my-3">
                <p className="w-40 truncate font-bold ">{product.title}</p>
                <p className="text-md text-teal-300 font-bold ">{product.price}</p>
            </div>
            <button className="rounded bg-teal-600 text-white px-4 py-2 text-sm text-center">Adiconar ao Carinho</button>
        </div>
    );
};