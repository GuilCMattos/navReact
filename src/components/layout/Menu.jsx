import './Menu.css'
import React from "react";

import { Link } from 'react-router-dom'

export default function Menu(props) { 
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}