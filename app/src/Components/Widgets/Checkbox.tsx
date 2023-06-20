import React from 'react';

interface Props
{
    label: string;
    checked: boolean;
    onChange: ( checked: boolean ) => void;
}

const Checkbox: React.FC<Props> = ({label, checked, onChange}) => {
    return(
        <label htmlFor="checkbox" className="
            flex items-center
            cursor-default
            select-none
            m-2
        ">
            <input
                type="checkbox"
                checked={checked}
                onChange={ (e) => onChange(e.target.checked) }
                className="
                    p-2 mr-2 w-7 h-7
                    appearance-none cursor-pointer
                    bg-white rounded-md
                    border border-slate-200 border-4
                    transition ease-in-out duration-300
                    hover:bg-white hover:border-green-300
                    checked:hover:bg-green-300 checked:hover:border-4 checked:hover:border-white
                    checked:border-green-300 checked:bg-green-300
                "
            />
            <span className="text-white">{label}</span>
        </label>
    )
}

export default Checkbox;