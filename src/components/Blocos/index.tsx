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

                <Bloco__Elemento>{elemento}</Bloco__Elemento>
                <Bloco__NomeElemento>{nomeElemento}</Bloco__NomeElemento>
                <Bloco__Peso>{peso}</Bloco__Peso>
            </Bloco>
        </>
    )
}

const Bloco = styled.section`
    width: 5rem;
    height: 5rem;
    border: .2rem solid #787878;
    background-color: #b5b5b5;
    position: relative;
    border-radius: .5rem;
    margin-bottom: .4rem;
`

const Bloco__NAtomic = styled.h3`
    position: absolute;
    font-size: .8rem;
    top: -.8rem;
    left: .3rem;
`


const Bloco__Elemento = styled.h2`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -55%);
    font-size: 2.5rem;
`

const Bloco__NomeElemento = styled.h4`
    font-size: .7rem;
    position: absolute;
    top: 2.1rem;
    left: 0;
    text-align: center;
    width: 100%;
`

const Bloco__Peso = styled.p `
    position: absolute;
    top: 3rem;
    left: 0;
    text-align: center;
    width: 100%;
    font-size: .8rem;
`

export default Blocos;
