import React from "react";

interface Props
{
    text: string
}
const Header: React.FC<Props> = ({text}) => {
    return(
        <h1 className="
                text-2xl text-white font-semibold
        ">
            {text}
        </h1>
    )
}

export default Header