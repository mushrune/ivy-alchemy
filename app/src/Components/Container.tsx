import * as React from 'react';
import '../App.css';
import '../output.css';

interface CardProps {
    children: React.ReactNode
}

const Container: React.FC<CardProps> = ({children}) => {
    return <div className="
        mx-auto
    ">
        <div className="
            bg-green-500
            m-2 p-4 rounded-md
        ">
            {children}
        </div>
    </div>
};

export default Container;