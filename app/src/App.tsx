import * as React from 'react';
import './App.css';
import './output.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Flash from "./Pages/Flash";
import Booking from "./Pages/Booking";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="flash" element={<Flash />} />
              <Route path="booking" element={<Booking />} />
              <Route path="*" element={<Home />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
