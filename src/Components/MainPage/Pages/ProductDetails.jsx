import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProivder/AuthProvider";


const ProductDetails = () => {
    const { id } = useParams()
    const alldata = useLoaderData();
    const [onproduct, setonporduct] = useState({});
    const {user} = useContext(AuthContext);
    console.log(user.email)

    useEffect(() => {
        const product = alldata?.find(data => data._id === id);
        setonporduct(product)
    }, [id, alldata])
    console.log(onproduct)

    const hendlecardproduct=()=>{
        const photo = onproduct.photo;
        const name = onproduct.name;
        const price = onproduct.Price;
        const  categoryitem = onproduct.categoryitem;
        const des = onproduct.description;
        const rating = onproduct.rating;
        const brand = onproduct.Brand;
        const email = user.email;
        console.log(name)
      const  productinfo = {photo,name,price,categoryitem,des,rating,brand,email};
      console.log(productinfo)
      fetch(`http://localhost:5000/cards`,{
        method:'POST',
        headers:{
            'content-Type': 'application/json',
        },
        body:JSON.stringify(productinfo)
      })
      .then((res)=>res.json())
      .then(data=>{
        console.log(data)
        if(data.acknowledged){
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
            <div className="card lg:card-side bg-base-100 shadow-xl w-full border p-5">
                <figure><img src={onproduct?.photo} alt="Album" className="w-full   lg:w-[700px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{onproduct?.name}</h2>
                    <h2 className="card-title">{onproduct?.Brand}</h2>
                    <h2 className="card-title"> Price ${onproduct?.Price}</h2>
                    <h2 className="card-title">{onproduct?.categoryitem}</h2>
                    <p>{onproduct.description}</p>
                    <p>{onproduct.rating}</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary" onClick={hendlecardproduct}>Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;