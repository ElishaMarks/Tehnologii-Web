import { useEffect, useState } from "react"
import CardCustom from "../components/CardCustom";


export interface IProduct{
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[] ;
}


const Product = () =>
{

    const [products, setProducts] = useState<IProduct[]>([]);


    const FetchProducts = () =>{
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products));

    }

    useEffect (()=> {
        FetchProducts();
    },[])



    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                padding: '1rem',
                margin: '1rem',

            }}
        >
            { products.map( (product, index) => {
                return(
                    <CardCustom key={index} product={product}/>)
            })}
        </div>
    )
}

export default Product