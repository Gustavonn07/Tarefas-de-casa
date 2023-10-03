import { ReactNode } from "react";

type PropsContainerBlocos = {
    children: ReactNode
}

const ContainerBlocos = ({ children }: PropsContainerBlocos) => {

    return (
        <>
            {children}
        </>
    )
}

export default ContainerBlocos;