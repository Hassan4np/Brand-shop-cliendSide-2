import { useLoaderData,  } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const data = useLoaderData();
    const { name, Price, _id, rating, description, photo, categoryitem, Brand } = data;
    console.log(data)

    const hendleupdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Brand = form.brand.value;
        const Price = form.price.value;
        const description = form.des.value;
        const rating = form.rating.value;
        const categoryitem = form.select.value;
        const photo = form.photo.value;
        const Productdetails = {
            name, Brand, Price, description, rating, categoryitem, photo
        }
        console.log(Productdetails)
        fetch(` https://brand-shop-bankend-ceevlci3v-hassan-alis-projects-8630df6d.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(Productdetails)

        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }


            })

    }

    return (
        <div>
            <form onSubmit={hendleupdateProduct} className="p-10">
            <div className="bg-[#F4F3F0] p-5">
                <h1 className="text-center text-2xl font-bold">Update Product</h1>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="name" defaultValue={name} name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name" defaultValue={rating} name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" placeholder="Price" defaultValue={Price} name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description" defaultValue={description} name="des" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex space-x-4">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select className="select select-bordered w-full" defaultValue={Brand} name="brand">
                            {/* <option selected>Who shot first?</option> */}
                            <option disabled selected>Select Product</option>
                            <option>Apple</option>
                            <option>Tecno</option>
                            <option>Sonny</option>
                            <option>Intel</option>
                            <option>Samsung</option>
                            <option>Google</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Select Item</span>
                        </label>
                        <select className="select select-bordered w-full" defaultValue={categoryitem} name="select">
                            {/* <option selected>Who shot first?</option> */}
                            <option>Phon</option>
                            <option>Laptob</option>
                            <option>Headphone</option>
                            <option>Proccse</option>
                        </select>
                    </div>
                </div>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Photo url" defaultValue={photo} name="photo" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Update Product" className="w-full mt-5 btn btn-success" />
            </div>
        </form>
        </div>
    );
};

export default Update;