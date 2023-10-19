import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductAll from "./ProductAll";

const AllBrandProduct = () => {
    // const { Brand } = useParams();
    const productss= useLoaderData();
    // console.log(prodectss)
    // const [products, setproducts] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/${Brand}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setproducts(data);
    //         })
    // }, [Brand]);

    // console.log(Brand, products)
    console.log(productss)
    return (
        <div>
            <h1>Brand product page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    productss?.map((product) => <ProductAll key={product._id} proscts={product}></ProductAll>)
                }
            </div>
        </div>
    );
};

export default AllBrandProduct;