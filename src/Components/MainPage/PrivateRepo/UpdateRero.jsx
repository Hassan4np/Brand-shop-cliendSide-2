
import { useContext } from "react";
import { AuthContext } from "../AuthProivder/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const UpdateRero = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const loc = useLocation()
    if (loading) {
        return <h1 className="text-2xl text-center font-bold">Loading...</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate state={loc.pathname} to='/login'></Navigate>
};

export {UpdateRero};