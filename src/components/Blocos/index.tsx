import { styled } from "styled-components";

type PropsBlocos = {
    nAtom: string,
    elemento: string,
    nomeElemento: string,
    peso: string
}

const Blocos = ({ nAtom, elemento, nomeElemento, peso }: PropsBlocos) => {

    return (
        <>
            <Bloco>
                <Bloco__NAtomic>{nAtom}</Bloco__NAtomic>

                <Bloco__Container>
                    <Bloco__Elemento>{elemento}</Bloco__Elemento>
                    <Bloco__NomeElemento>{nomeElemento}</Bloco__NomeElemento>
                    <Bloco__Peso>{peso}</Bloco__Peso>
                </Bloco__Container>
            </Bloco>
        </>
    )
}

const Bloco = styled.section`

`

const Bloco__NAtomic = styled.h3`

`

const Bloco__Container = styled.div`

`

const Bloco__Elemento = styled.h2`

`

const Bloco__NomeElemento = styled.h4`

`

const Bloco__Peso = styled.p `

`

export default Blocos;
