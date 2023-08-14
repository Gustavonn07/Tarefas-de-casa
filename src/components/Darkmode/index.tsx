import { useState } from 'react';
import './style.css'

const Darkmode = () => {

    const [clicks, setClicks] = useState(0);

    const trocarModo = () => {
        return setClicks(clicks + 1);
    }

    const trocarCor = () => {
        if (clicks % 2 === 0) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }
    }

    trocarCor();
    
    return (
        <>
            <button className='darkmode__btn' onClick={trocarModo}>
                <img
                    className='darkmode__icon'
                    src={clicks % 2 === 0 ? "images/sun.svg" : "images/moon.svg"}
                    alt={clicks % 2 === 0 ? "Imagem de um sol" : "Imagem de uma lua"}
                 />
            </button>
        </>
    )
}

export default Darkmode;