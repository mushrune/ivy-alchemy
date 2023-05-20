import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const Logo: React.FC = () => {
    return(
        <div className="
            flex justify-evenly
            text-4xl font-serif font-bold
        ">
            <span className="animate-bounce animate-bounce">I</span>
            <span className="animate-bounce animate-bounce animation-delay-[1000ms]">V</span>
            <span className="animate-bounce animate-bounce animation-delay-[1500ms]">Y</span>
            <span className="w-2"> </span>
            <span className="animate-bounce animate-bounce animation-delay-[2000ms]">A</span>
            <span className="animate-bounce animate-bounce animation-delay-[2500ms]">L</span>
            <span className="animate-bounce animate-bounce animation-delay-[3000ms]">C</span>
            <span className="animate-bounce animate-bounce animation-delay-[3500ms]">H</span>
            <span className="animate-bounce animate-bounce animation-delay-[4000ms]">E</span>
            <span className="animate-bounce animate-bounce animation-delay-[4500ms]">M</span>
            <span className="animate-bounce animate-bounce animation-delay-[5000ms]">Y</span>
        </div>
    )
}

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [location])

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [isOpen])

    return(
        <div className="">
            <div className="
            backdrop-filter backdrop-blur bg-[rgba(146,64,14,0.7)]
            w-full h-32
            flex items-center justify-center
            fixed top-0 left-0 z-50"
            >
                { !isOpen && <button
                    onClick={toggleMenu}
                    className="absolute left-0 m-2 px-3 py-2 left-0 rounded-md text-white bg-gray-900 text-2xl"
                >Back</button>}
                {/*<h1 className="text-4xl font-serif font-bold animate-bounce">IVY ALCHEMY</h1>*/}
                <Logo />
            </div>

            {isOpen && (
                <div className="fixed w-full h-full mt-32 bg-gray-800 text-white flex flex-col items-center justify-center z-10">
                    <Link to="/flash" className="text-4xl m-4" onClick={toggleMenu}>FLASH</Link>
                    <Link to="/booking" className="text-4xl m-4" onClick={toggleMenu}>BOOKING</Link>
                    <Link to="/about" className="text-4xl m-4" onClick={toggleMenu}>ABOUT ME</Link>
                </div>
            )}
            <div className="pt-36"><Outlet /></div>
        </div>
    );
}

export default Navigation;