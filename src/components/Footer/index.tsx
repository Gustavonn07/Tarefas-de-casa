import React, { ReactNode } from 'react';
import './style.css';

type PropsFooter = {
    children: ReactNode
}

const Footer = ({children}: PropsFooter) => {
    return (
        <>
            {children}
        </>
    )
}

export default Footer;