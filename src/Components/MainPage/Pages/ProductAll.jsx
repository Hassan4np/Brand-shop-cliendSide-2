
import { Link } from 'react-router-dom';

const ProductAll = ({ proscts }) => {
    const { name, Price, _id, rating, description, photo, categoryitem, Brand } = proscts;

    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md  w-[380px] md:w-[420px] lg:w-[550px] rounded-xl bg-clip-border border mt-5 p-5">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-72 rounded-xl bg-clip-border">
                    <img
                        src={photo}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6 h-52">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {name}
                            </p>
                        </div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {categoryitem}
                        </p>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {Brand}
                            </p>
                        </div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${Price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {description}
                    </p>
                    <div className="rating rating-sm">
                        <input type="radio" name={`rating-${rating}`} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={`rating-${rating}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`rating-${rating}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`rating-${rating}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`rating-${rating}`} className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className="flex justify-center gap-5">
                    <Link to={`/Product/${_id}`}><button
                        className="block btn btn-success w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"type="button">
                             Details
                    </button></Link>
                    <Link to={`/update/${_id}`}><button
                        className="block btn btn-secondary w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"type="button">
                             Update
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductAll;