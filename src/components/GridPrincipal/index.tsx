import { ReactNode } from 'react';
import './style.css'

type PropsGridPrincipal  = {
    children: ReactNode;
}

const GridPrincipal = ({children}: PropsGridPrincipal) => {

    return (
        <>
            <div className="grid">
                {children}
            </div>
        </>
    )
}

export default GridPrincipal;