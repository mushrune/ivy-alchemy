import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Logo: React.FC = () => {
    return(
        <div className="
            flex justify-evenly
            text-4xl font-serif font-bold text-green-300
            select-none
        ">
            <span className="m-0.5 animate-bounce animate-bounce">I</span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[1000ms]">V</span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[1500ms]">Y</span>
            <span className="m-0.5 w-2"> </span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[2000ms]">A</span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[2500ms]">L</span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[3000ms]">C</span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[3500ms]">H</span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[4000ms]">E</span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[4500ms]">M</span>
            <span className="m-0.5 animate-bounce animate-bounce animation-delay-[5000ms]">Y</span>
        </div>
    )
}

const Navigation: React.FC = () => {
    const [backButton, setBackButton] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setBackButton(false);
        } else {
            setBackButton(true);
        }
    }, [location])

    return(
        <div className="">
            <div className="
            backdrop-filter backdrop-blur
            w-full h-32
            flex items-center justify-center
            fixed top-0 left-0 z-50"
            >
                { backButton &&
                    <div className="fixed inset-0 flex items-center justify-center z-50 mt-24" >
                        <Link
                            to="/"
                            className="m-2 px-3 py-2 left-0 rounded-md text-white bg-green-500 text-2xl"
                        >
                            <AiFillHome />
                        </Link>
                    </div>
                }
                <Logo />
            </div>

            <div className="
                pt-36
                h-screen
            ">
                <Outlet />
            </div>
        </div>
    );
}

export default Navigation;