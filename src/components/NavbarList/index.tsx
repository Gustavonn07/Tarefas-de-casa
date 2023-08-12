import './style.css';

type PropsNavbarList = {
    texto: string
}

const NavbarList = ({texto}: PropsNavbarList) => {

    return(
        <>
            <h4 className='navbar__list'><a href="#" className='navbar__link'>{texto}</a></h4>
        </>
    )
}

export default NavbarList;