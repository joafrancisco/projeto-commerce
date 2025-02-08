'use client'
import { useState } from "react";
import Image from "next/image";
import { ProdctType } from "@/types/ProductTypes";
type ProductImageProps = {
 product: ProdctType;
 fill?: boolean;   
};

export default function ProductImage({ product,fill }: ProductImageProps) {
    const [loading, setLoading] = useState(true);
    return fill ? (
        <Image 
        src={product.image}
        fill
        alt={product.title}
        className={`object-cover ${loading ? "grayscale blur-3xl scale-110" : "grayscale-0 blur-0 scale-100"}`}
        onLoadingComplete={() => setLoading(false)}
        />
    ): (
        <Image
        src={product.image}
        width={400}
        height={700}
        alt={product.title}
        className={`object-cover ${loading ? "grayscale blur-3xl scale-110" : "grayscale-0 blur-0 scale-100"}`}
        onLoadingComplete={() => setLoading(false)}/>
    )
}
