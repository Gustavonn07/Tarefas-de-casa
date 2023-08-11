import React, { ReactNode } from 'react';
import './style.css'

type PropsGridPrincipal  = {
    children: ReactNode;
}

const GridPrincipal = ({children}: PropsGridPrincipal) => {

    return (
        <>
            <div className="grid__principal">
                {children}
            </div>
        </>
    )
}

export default GridPrincipal;