import './App.css'
import React from "react";
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

export default function App(props) { 
    return (
        <div className="App">
            <Menu />
            <Content />
            
        </div>
    )
}