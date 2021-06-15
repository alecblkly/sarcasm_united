import React from "react";
import { useDarkMode } from "../hooks/useDarkMode"

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div className="navbar">
            <h1 className="maintitle">Sarcasm United - Windseeker [A]</h1>
                <div className="darkmode">
                    <div className='dark-mode__toggle'>
                        <div
                        onClick={toggleMode}
                        className={darkMode ? 'toggle toggled' : 'toggle'}
                        />
                    </div>
                </div>
        </div>

    )
};

export default NavBar;