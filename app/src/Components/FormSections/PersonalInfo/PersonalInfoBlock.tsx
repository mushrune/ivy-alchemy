import React, { useState } from 'react';
import Header from "../../Widgets/Header";
import Input from "../../Widgets/Input";
import Checkbox from "../../Widgets/Checkbox";
import FavoriteColorBlock from "./FavoriteColorBlock";

const PersonalInfoBlock: React.FC = () => {
    const [ isLegalName, setIsLegalName ] = useState<boolean>( false );

    const handleIsLegalName = ( checked: boolean ) => {
        setIsLegalName(checked);
    }

    return(
        <div className="
        ">
            <Header text="Your information" />
            <div className="flex justify-center items-center" >
                <Input label="Preferred Name" />
            </div>
            <div className="flex justify-center items-center">
                <Input label="Pronouns" />
                <Input className="w-40" label="Age" />
            </div>
        </div>
    )
}

export default PersonalInfoBlock;