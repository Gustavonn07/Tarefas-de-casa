import './style.css';

type PropsCard = {
    imagemPato: string,
    altPato: string,
    icon: string,
    altIcon: string,
    text1: string
    text2: string
    text3: string
    text4: string
}

const Card = ({imagemPato, altPato, icon, altIcon, text1, text2, text3, text4}: PropsCard) => {

    return (
        <>
            <div className="card">
                <img className='card__img' src={imagemPato} alt={altPato} />
                <div className="card__text">
                    <img src={icon} alt={altIcon} className="card__icon" />
                    <p className="card__paragraph">{text1}</p>
                </div>
                <div className="card__text">
                    <img src={icon} alt={altIcon} className="card__icon" />
                    <p className="card__paragraph">{text2}</p>
                </div>
                <div className="card__text">
                    <img src={icon} alt={altIcon} className="card__icon" />
                    <p className="card__paragraph">{text3}</p>
                </div>
                <div className="card__text">
                    <img src={icon} alt={altIcon} className="card__icon" />
                    <p className="card__paragraph">{text4}</p>
                </div>
            </div>
        </>
    )
}

export default Card;