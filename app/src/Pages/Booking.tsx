import React from 'react';
import '../App.css';
import '../output.css';
import Container from "../Components/Container";
import VerifyBlock from "../Components/FormSections/Verify/VerifyBlock";
import PersonalInfoBlock from "../Components/FormSections/PersonalInfo/PersonalInfoBlock";
import TattooInfoBlock from "../Components/FormSections/TattooInfo/TattooInfoBlock";

const Booking: React.FC = () => {
    return (
        <Container>
            <VerifyBlock />
            <PersonalInfoBlock />
            <TattooInfoBlock />
        </Container>
    )
}

export default Booking;