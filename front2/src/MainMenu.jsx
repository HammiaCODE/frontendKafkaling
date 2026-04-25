import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/ui/Header";
import Catalogue from "./components/Catalogue";

function MainMenu() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </div>
    );
}

export default MainMenu;