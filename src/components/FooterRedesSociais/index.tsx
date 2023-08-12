import './style.css'

type PropsFooterRedesSociais = {
    img: string,
    alt: string,
    link: string
}

const FooterRedesSociais = ({img, alt, link}: PropsFooterRedesSociais) => {
    return (
        <>
            <a href={link} target='_blank'><img className='footer__icon' src={img} alt={alt} /></a>
        </>
    )
}

export default FooterRedesSociais;