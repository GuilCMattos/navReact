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
                        <Link to="/param/123">Param #01</Link>
                    </li>

                    <li>
                        <Link to="/param/legal">Param #02</Link>
                    </li>

                    <li>
                        <Link to="/About">About</Link>
                    </li>

                    <li>
                        <Link to="/notExist">NotExist</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}