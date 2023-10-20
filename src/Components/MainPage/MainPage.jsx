import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import { useState } from "react";


const MainPage = () => {
    const [isdark, setisdark] = useState(false);
    const hendledark = () => {
        setisdark(!isdark)
    }


    return (
        <div className={`max-w-screen-xl mx-auto bg-black text-white`}>
            <div className={isdark? 'bg-black text-white'  : 'bg-white text-black'}
 >
                <Navbar dark={hendledark} isdark={isdark}></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainPage;