import React, { ReactNode } from 'react';
import './style.css';

type PropsGridGaleria = {
    children: ReactNode
}

const GridGaleria = ({children}: PropsGridGaleria) => {

    return (
        <>
            {children}
        </>
    )
}

export default GridGaleria;
