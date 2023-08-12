import React, { ReactNode } from 'react';
import './style.css';

type PropsNavbar = {
    children: ReactNode;
}

const Navbar = ({children}: PropsNavbar) => {
    return(
        <>
            <div className="navbar">
                {children}
                NAVBAR
            </div>
        </>
    )
} 

export default Navbar;