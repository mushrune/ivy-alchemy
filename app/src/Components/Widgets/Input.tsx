import React from 'react';

interface Props {
    label: string
    className?: string
}

const Input: React.FC<Props> = ({ label, className }) => {
    return(
        <input
            className={`
                rounded-md block w-full p-2 m-2 h-fit
                transition ease-in-out duration-300
                focus:outline-none focus:border-green-300
                border border-slate-100 border-4
                ${className}
            `}
            placeholder={label}
        />
    )
}

export default Input;