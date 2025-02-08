import { ProdctType } from "@/types/ProductTypes";

type ProductProps = {
    product: ProdctType;
};

export default function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300">
            <div className="relative max-h-72 flex-1">IMG</div>
            <div className="flex justify-between font-bold my-3">{product.title}</div>
            <button className="rounded bg-teal-600 text-white px-4 py-2 text-sm text-center">Adiconar ao Carinho</button>
        </div>
    );
};