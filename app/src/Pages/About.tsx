import React from 'react';
import '../App.css';
import '../output.css';
import Container from "../Components/Container";
import Header from "../Components/Widgets/Header";
/*
The home page will contain the following components:
1. A profile card that contains some info about Ivy
2. A gallery of Ivy's previous work
 */
const About: React.FC = () => {
    return(
        <Container>
            <Header text="Hi! I'm Ivy" />
            <br />
            <p className="text-justify text-white">I'm a tattoo artist working in Portland OR, and I specialize in creating creatures of all sorts for people of all sorts!</p>
        </Container>
    )
}

export default About;