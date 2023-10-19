import { useContext, } from "react";
import { useLoaderData, } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProivder/AuthProvider";


const ProductDetails = () => {
    const onproduct = useLoaderData();
    const { user } = useContext(AuthContext);

    const hendlecardproduct = () => {
        const photo = onproduct.photo;
        const name = onproduct.name;
        const price = onproduct.Price;
        const categoryitem = onproduct.categoryitem;
        const des = onproduct.description;
        const rating = onproduct.rating;
        const brand = onproduct.Brand;
        const email = user.email;
        console.log(name)
        const productinfo = { photo, name, price, categoryitem, des, rating, brand, email };
        console.log(productinfo)
        fetch(`http://localhost:5000/cards`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(productinfo)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your product is successfully add',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div>
            <div className="md:flex border my-5 rounded-md">
                <div className="flex-1">
                    <figure className=""><img className="w-[450px] h-[400px] p-5" src={onproduct?.photo} alt="Album" /></figure>
                </div>
                <div className="card-body flex-1">
                    <h2 className="card-title font-bold">Name: {onproduct?.name}</h2>
                    <h2 className="card-title"> Brand: {onproduct?.Brand}</h2>
                    <h2 className="card-title"> Price: ${onproduct?.Price}</h2>
                    <h2 className="card-title">Category: {onproduct?.categoryitem}</h2>
                    <p className="text-gray-500"> {onproduct?.description}</p>
                    <p className="text-gray-600 font-bold">{onproduct?.rating}/5</p>
                    <div className="card-actions ">
                        <button className="btn btn-success" onClick={hendlecardproduct}>Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;