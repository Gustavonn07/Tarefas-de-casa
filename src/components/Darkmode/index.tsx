import React, { useState } from 'react';
import './style.css'

const Darkmode = () => {

    const [clicks, setClicks] = useState(0);

    const trocarModo = () => {
        return setClicks(clicks + 1);
    }
    
    return (
        <>
            <button className='darkmode__btn' onClick={trocarModo}>
                <img
                    className='darkmode__icon'
                    src={clicks % 2 === 0 ? "src/images/sun.svg" : "src/images/moon.svg"} 
                    alt="" />
            </button>
        </>
    )
}

export default Darkmode;