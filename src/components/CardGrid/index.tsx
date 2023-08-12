import React, { ReactNode } from 'react';
import './style.css';

type PropsCardGrid = {
    children: ReactNode
}

const CardGrid = ({children}: PropsCardGrid) => {

    return (
        <>
            <div className="grid__card">
                {children}
                GRID CARDS
            </div>
        </>
    )
}

export default CardGrid;
