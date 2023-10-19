import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProivder/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";
import { setItem } from "localforage";


const MyCard = () => {
    const { user } = useContext(AuthContext);
    const emails = user.email;
    const data = useLoaderData();
    const [carditem, setcarditem] = useState([]);



    useEffect(() => {
        const itmes = data?.filter(item => item.email === emails);
        setcarditem(itmes)
    }, [emails])
    // console.log(carditem)
    console.log(carditem)

    const hendledelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/cards/${id}`, {

            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                const remaildata = carditem.filter(card => card._id !== id);
                setItem(remaildata)


            })
    }
    return (
        <div>
            <div className="overflow-x-auto min-h-[450px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-gray-600 text-xl  font-bold">
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Delete</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            carditem?.map((item) => <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.categoryitem}</td>
                                <td>${item.price}</td>
                                <button className="btn btn-sm bg-red-600" onClick={() => hendledelete(item._id)}>X</button>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCard;