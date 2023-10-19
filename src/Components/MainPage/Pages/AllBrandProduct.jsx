import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductAll from "./ProductAll";
import Carosol from "./Carosol";

const AllBrandProduct = () => {
    const productss = useLoaderData();
    console.log(productss)
    //-------------------------------

    const { Brand } = useParams();
    const allitem = useLoaderData()
    

    const [products, setproducts] = useState([]);

    useEffect(() => {
        const alldata = allitem.filter(data => data.Brand === Brand);
        console.log(alldata)
        setproducts(alldata)
    }, [])


    //---------------------------------------
    // console.log(productss)
    return (
        <div>
            <Carosol></Carosol>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products?.map((product) => <ProductAll key={product._id} proscts={product}></ProductAll>)
                }
            </div>
        </div>
    );
};

export default AllBrandProduct;