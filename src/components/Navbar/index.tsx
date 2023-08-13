import { ReactNode } from 'react';
import './style.css';

type PropsNavbar = {
    children: ReactNode;
}

const Navbar = ({children}: PropsNavbar) => {
    return(
        <>
            <nav className="navbar">
                {children}
            </nav>
        </>
    )
} 

export default Navbar;