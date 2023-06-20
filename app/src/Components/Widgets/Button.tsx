import React from 'react';

interface Props
{
    label: string
}

const Button: React.FC<Props> = ({label}) => {
    return(
        <button
            className="
                rounded-lg block w-fit p-2 m-2
                bg-slate-200 text-slate-500
                whitespace-nowrap
                transition ease-in-out duration-300
                hover:bg-white hover:border-green-300 hover:text-black
                active:bg-white
                onclick:border-white
                border border-white border-4
            "
        >
            {label}
        </button>
    )
}

export default Button;