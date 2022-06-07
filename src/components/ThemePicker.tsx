import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function ThemePicker() {
    

    return (
        <>
        
        <div className="container">
            <h1>Pick a Theme</h1>
            <div>
                <Link to="/portfolio">Index</Link>
            </div>
            <div>
                <Link to='/minimalist'>Minimalist</Link>
            </div>
            <div>
                <Link to='/hacker'>Hacker</Link>
            </div>
            <div>
                <Link to='/frontend-dev'>Frontend Dev</Link>
            </div>
            <div>
                <Link to='anime'>Anime</Link>
            </div>
        
        </div>
        
        </>
    )
}
