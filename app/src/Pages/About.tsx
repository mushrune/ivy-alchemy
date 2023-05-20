import React from 'react';
import '../App.css';
import '../output.css';
import Card from "../Components/Card";
/*
The home page will contain the following components:
1. A profile card that contains some info about Ivy
2. A gallery of Ivy's previous work
 */
const About: React.FC = () => {
    return(
        <Card>
            <h1>Hi! I'm Ivy</h1>
            <br />
            <p className="text-justify">I'm a tattoo artist working in Portland OR, and I specialize in creating creatures of all sorts for people of all sorts!</p>
        </Card>
    )
}

export default About;