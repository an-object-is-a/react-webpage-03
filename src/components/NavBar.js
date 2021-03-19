import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav_bar_styles.css';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState();

    function switch_menu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        window.innerWidth > 600 ?
            setIsDesktop(true) : setIsDesktop(false);
    }, []);

    window.addEventListener('resize', () => {
        window.innerWidth > 600 ?
            setIsDesktop(true) : setIsDesktop(false);
    });

    return (
        <div className="nav_bar">
            <div className="icon_container menu_switch">
                <div className="back_contrast">
                    {
                        isDesktop ?
                            <i onClick={switch_menu} className={`${showMenu ? 'fas fa-times' : 'far fa-circle'}`} />
                            :
                            <i onClick={switch_menu} className={`${showMenu ? 'fas fa-times' : 'fas fa-bars'}`} />
                    }
                </div>
            </div>

            <div className={`nav_container ${showMenu ? 'menu_active' : null}`}>
                <div className="icon_container logo">
                    <img src="./images/icons/val-symbol.png" alt="" />
                </div>
                <ul className="menu_items">
                    <li>
                        <Link to="/" onClick={switch_menu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={switch_menu}>Products</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={switch_menu}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
