import React, { useEffect, useState } from 'react';
import '../App.css';
import '../output.css';
import Container from "../Components/Container";

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
                <Container>
                    <p className="text-white uppercase font-bold text-center text-3xl">{animal}</p>
                    <img className="rounded-2xl border border-4 border-slate-200" alt="an awesome man" src="https://i.imgflip.com/50unao.png?a466320" />
                </Container>
            ))}
        </div>
    )
}

export default Flash;