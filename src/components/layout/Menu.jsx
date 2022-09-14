import './Menu.css'
import React from "react";

export default function Menu(props) { 
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}