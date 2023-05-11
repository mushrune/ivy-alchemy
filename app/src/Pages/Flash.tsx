import React from 'react';
import '../App.css';
import '../output.css';
import Card from "../Components/Card";

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
const Flash: React.FC = () => {
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

export default Flash;