import React from 'react';
import Input from "../../Widgets/Input";
import Button from "../../Widgets/Button";
import { AiFillPhone } from "react-icons/ai";

const VerifyEmail: React.FC = () => {
    return(
        <div>
            <div className="flex justify-center">
                <div className="m-2 w-20 h-12 text-white flex items-center">
                    <span className="h-full w-full inline-block align-middle text-center text-4xl">@</span>
                </div>
                <Input label="Email Address"/>
                <Button label="Send Code"/>
            </div>
        </div>
    )
}

export default VerifyEmail;