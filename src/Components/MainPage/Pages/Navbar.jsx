import { NavLink } from "react-router-dom";
import logo from './../../../assets/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../AuthProivder/AuthProvider";

const Navbar = () => {
    const { user,UserLogout } = useContext(AuthContext);
    const links = <>
        <NavLink to='/' className='mr-2 btn btn-sm '><li>Home</li></NavLink>
        <NavLink to='/addproduct' className='mr-2  btn btn-sm '><li>Add Product</li></NavLink>
        <NavLink to='/mycard' className=' btn btn-sm '><li>My Card</li></NavLink>
    </>
    const hendleLogout=()=>{
        UserLogout()
        .then((result)=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className=" w-12 h-12  md:w-[80px] md:h-[80px] rounded-full" src={logo} alt="img" />
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="w-10 mr-1"><img className='rounded-full' src={user?.photoURL} /></div>}
                {user && <p className='mr-1'>{user?.displayName}</p>}
                {
                    user ? <button className="btn btn-sm" onClick={hendleLogout} >Logout</button> : <NavLink to='/login'><button className="btn  btn-sm" >Login</button></NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;