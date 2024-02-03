import React from 'react'
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/layout';


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

