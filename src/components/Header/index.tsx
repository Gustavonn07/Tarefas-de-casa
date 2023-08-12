import React, { ReactNode } from 'react';
import './style.css';

type PropsHeader = {
    children: ReactNode
}

const Header = ({children}: PropsHeader) => {
    
    return (
        <>
        <div className="header">
            {children}
            HEADER
        </div>
        </>
    )
}

export default Header;