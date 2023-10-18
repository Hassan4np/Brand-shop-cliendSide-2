import { NavLink } from "react-router-dom";

const BrandCatagory = ({ data }) => {

    console.log(data)
    return (
        <NavLink to={`/products/:${data.name}`}>
            <div className="card  bg-base-100 shadow-xl border">
                <figure className="px-10 pt-10">
                    <img src={data.img} alt="Brand" className="rounded-xl w-64 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.name}</h2>
                </div>
            </div>
        </NavLink>
    );
};

export default BrandCatagory;