import React, { ReactNode } from 'react';
import './style.css';

type PropsFooter = {
    children: ReactNode
}

const Footer = ({children}: PropsFooter) => {
    return (
        <>
            <div className="footer">
                {children}
            </div>
        </>
    )
}

export default Footer;