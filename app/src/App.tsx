import * as React from 'react';
import './App.css';
import './output.css';
import {Routes, Route, Navigate} from "react-router-dom";
import About from "./Pages/About";
import Flash from "./Pages/Flash";
import Booking from "./Pages/Booking";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.body.classList.add('bg-green-800')
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Home />}/>
                    <Route path="flash" element={<Flash/>}/>
                    <Route path="booking" element={<Booking/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
