import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1 className="text-center mt-10 font-bold mb-10">opp,s data not found</h1>
            <div className="text-center mx-auto">
             <NavLink to="/"><button className="btn btn-success">Go Home</button></NavLink>
            </div>
        </div>
    );
};

export default Error;