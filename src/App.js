import React from "react";
import MovieList from "./Components/MovieList";
import PersonDisplay from "./Components/PersonDisplay";
import Navbar from "./UI/Navbar";

const App = () => {
    return (
        <>
            <Navbar/>
            <PersonDisplay/>
            <MovieList/>
        </>
    );
};

export default App; 