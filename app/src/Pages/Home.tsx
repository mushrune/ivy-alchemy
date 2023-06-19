import React from 'react'
import {Link} from "react-router-dom";

interface MenuLinkProps
{
    to: string;
    children: React.ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = ({to, children}) => {
    return(
        <Link to={to} className="
            m-4 p-4 w-60
            text-4xl text-center
            rounded-lg
            transition ease-in-out duration-300
            border border-4 border-transparent hover:border-green-300
        ">
            {children}
        </Link>
    )
}

const Home: React.FC = () => {
    return(
        <div className="absolute left-0 top-0 w-screen h-screen text-green-300 font-bold flex flex-col items-center justify-center">
            <MenuLink to="/flash" >FLASH</MenuLink>
            <MenuLink to="/booking" >BOOKING</MenuLink>
            <MenuLink to="/about" >ABOUT ME</MenuLink>
        </div>
    )
}

export default Home;