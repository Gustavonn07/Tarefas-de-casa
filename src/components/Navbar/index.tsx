import React, { ReactNode } from 'react';
import './style.css';

type PropsNavbar = {
    children: ReactNode;
}

const Navbar = ({children}: PropsNavbar) => {
    return(
        <>
            {children}
        </>
    )
} 

export default Navbar;