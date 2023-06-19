import React from 'react';
import Input from "../../Widgets/Input";
import Button from "../../Widgets/Button";
import { AiFillPhone } from "react-icons/ai";

const VerifyPhone: React.FC = () => {
    return(
        <div>
            <div className="flex justify-center">
                <div className="m-2 w-20 h-12 text-white flex justify-center items-center">
                    <AiFillPhone size={'2em'} />
                </div>
                <Input label="Phone Number"/>
                <Button label="Send Code"/>
            </div>
        </div>
    )
}

export default VerifyPhone;