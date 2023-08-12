import './style.css';

type PropsHeaderHeading = {
    texto: string,
    texto2: string
}

const HeaderHeading = ({texto, texto2}: PropsHeaderHeading) => {

    return (
        <>
            <h1 className='header__heading'>{texto} <br /> {texto2}</h1>
        </>
    )
}

export default HeaderHeading