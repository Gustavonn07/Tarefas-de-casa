import React, { ReactNode } from 'react';
import './style.css';

type PropsGridGaleria = {
    children: ReactNode
}

const GridGaleria = ({children}: PropsGridGaleria) => {

    return (
        <>
            <div className="galeria">
                {children}
                GALERIA
            </div>
        </>
    )
}

export default GridGaleria;
