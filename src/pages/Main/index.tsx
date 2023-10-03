import { ReactNode } from "react";

type PropsMain = {
    children: ReactNode
}

const Main = ({ children }: PropsMain) => {

    return (
        <>
            {children}
        </>
    )
}

export default Main;