import { Outlet } from "react-router-dom";
import styled from "styled-components";

const PageLayout = () => {

    return (
        <>
            <ContainerLayout>
                <Outlet />
            </ContainerLayout>
        </>
    )
}

const ContainerLayout = styled.main`
    display: grid;
    grid-template-columns: repeat(18, 5rem);
    grid-template-rows: repeat(11, 5rem);
    gap: .2rem;
`

export default PageLayout;