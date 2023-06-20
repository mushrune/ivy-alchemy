import React from 'react';
import Header from "../../Widgets/Header";
import Input from "../../Widgets/Input";

const PersonalInfoBlock: React.FC = () => {
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