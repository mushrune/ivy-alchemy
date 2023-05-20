import React, { useEffect, useState } from 'react';
import '../App.css';
import '../output.css';
import Card from "../Components/Card";

const Flash: React.FC = () => {
    const [data, setData] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/flash')
            .then( response => {
                if ( !response.ok ) {
                    throw new Error('There was a problem!');
                }
                return response.json()
            })
            .then( data => setData(data))
            .catch( error => {
                console.error('There was a problem!')
            });
    }, []);

    return (
        <div className="justify-evenly sm:grid sm:gap-4 sm:grid-cols-2">
            { data.map((animal) => (
                <Card>
                    <p>{animal}</p>
                    <img className="rounded-2xl" alt="an awesome man" src="https://i.imgflip.com/50unao.png?a466320" />
                </Card>
            ))}
        </div>
    )
}

export default Flash;