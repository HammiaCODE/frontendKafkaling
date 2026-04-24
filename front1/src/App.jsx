import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  )
}

export default App
