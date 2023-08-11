import React, { ReactNode } from 'react';
import './style.css'

type GridPrincipalProps  = {
    children: ReactNode;
}

const GridPrincipal = ({children}: GridPrincipalProps) => {

    return (
        <>
            <div className="grid__principal">
                {children}
            </div>
        </>
    )
}

export default GridPrincipal;