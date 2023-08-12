import './style.css';

type PropsFooterText = {
    text: string
}

const FooterText = ({text}: PropsFooterText) => {

    return (
        <>
            <p className='footer__copy'>{text}</p>
        </>
    )
}

export default FooterText;