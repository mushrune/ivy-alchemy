import * as React from 'react';
import '../App.css';
import '../output.css';

interface CardProps {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({children}) => {
    return <div className="
        mx-auto
    ">
        <div className="
            bg-white
            sm:rounded-xl
            p-4
            drop-shadow-lg
            border-2
            border-solid
            border-slate-50
        ">
            {children}
        </div>
    </div>
};

export default Card;