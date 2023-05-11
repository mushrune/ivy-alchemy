import React from 'react';
import '../App.css';
import '../output.css';
import Card from "../Components/Card";
/*
The home page will contain the following components:
1. A profile card that contains some info about Ivy
2. A gallery of Ivy's previous work
 */
const Animals = [
    "Goat",
    "Chicken",
    "Donkey",
    "Glubby",
    "Rhino",
    "Giraffe",
    "LC",
    "Ripley",
    "Shrimp",
    "Worm",
    "Worms??"
];
const Home: React.FC = () => {
    return (
        <div className="justify-evenly sm:grid sm:gap-4 sm:grid-cols-2">
        { Animals.map((animal) => (
            <Card>
                <p>{animal}</p>
                <img className="rounded-2xl" alt="an awesome man" src="https://i.imgflip.com/50unao.png?a466320" />
            </Card>
        ))}
        </div>
    )
}

export default Home;