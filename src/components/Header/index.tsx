import React, { ReactNode } from 'react';
import './style.css';

type PropsHeader = {
    children: ReactNode
}

const Header = ({children}: PropsHeader) => {
    
    return (
        <>
        <header className="header">
            {children}
        </header>
        </>
    )
}

export default Header;