import React from 'react';
import VerifyPhone from "./VerifyPhone";
import VerifyEmail from "./VerifyEmail";
import Header from "../../Widgets/Header";

const VerifyBlock: React.FC = () => {
    return(
        <div>
            <Header text="Please verify a contact method" />
            <VerifyPhone />
            <VerifyEmail />
        </div>
    )
}

export default VerifyBlock;