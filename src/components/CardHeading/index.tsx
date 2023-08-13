import './style.css';

type PropsCardHeading = {
    texto: string
}

const CardHeading = ({texto}: PropsCardHeading) => {

    return (
        <>
            <h2 className='card__heading'>{texto}</h2>
        </>
    )
}

export default CardHeading;