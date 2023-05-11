import * as React from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import '../output.css';

interface ButtonProperties {
    title: string;
    to: string;
}

const Button: React.FC<ButtonProperties> = ({title, to}) => {
    return (
        <li>
            <Link to={to} className="
                transition
                ease-in-out
                flex
                p-4
                text-justify
                sm:text-lg
                sm:p-2
                hover:bg-zinc-800
                space-x-10
                rounded-lg
                text-gray-200
                hover:text-white
                ">
                {title}
            </Link>
        </li>
    )
}

const MenuBar: React.FC = () => {
    return (
        <div className="
            bg-gradient-to-r
            from-zinc-900
            via-stone-800
            to-zinc-900
            m-1
            p-7
            sm:p-4
            rounded-lg
            drop-shadow-2xl
            ">
            <nav className="container mx-auto">
                <ul className="flex items-center text-center justify-around">
                    <Button title="FLASH" to="/flash"/>
                    <Link to="/" className="transition ease-in-out font-serif text-white font-bold text-lg sm:text-xl scale-125 hover:scale-150">
                        IVY ALCHEMY
                    </Link>
                    <Button title="BOOKING" to="/booking"/>
                </ul>
            </nav>
        </div>
    )
}

export default MenuBar;