import React, { ReactNode } from 'react';
import './style.css';

type PropsHeader = {
    children: ReactNode
}

const Header = ({children}: PropsHeader) => {
    
    return (
        <>
            {children}
        </>
    )
}

export default Header;