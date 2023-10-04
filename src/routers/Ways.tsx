import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageLayout from "../layout/PageLayout";
import Main from "../pages/Main";
import Blocos from "../components/Blocos";
import NotFound from "../pages/NotFound";
import { styled } from "styled-components";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLayout /> }>
                                <Route index element={
                                    <Main>
                                        <Hidro>
                                            <Blocos
                                                elemento="H"
                                                nAtom="1"
                                                nomeElemento="Hidrogênio"
                                                peso="1.008"
                                            />
                                        </Hidro>

                                        <Container01>
                                            <Blocos
                                                elemento="Li"
                                                nAtom="3"
                                                nomeElemento="Lítio"
                                                peso="6.94"
                                            />
                                            <Blocos
                                                elemento="Na"
                                                nAtom="11"
                                                nomeElemento="Sódio"
                                                peso="22.990"
                                            />
                                            <Blocos
                                                elemento="K"
                                                nAtom="19"
                                                nomeElemento="Potássio"
                                                peso="39.098"
                                            />
                                            <Blocos
                                                elemento="Rb"
                                                nAtom="37"
                                                nomeElemento="Rúbidio"
                                                peso="85.468"
                                            />
                                            <Blocos
                                                elemento="Cs"
                                                nAtom="55"
                                                nomeElemento="Césio"
                                                peso="132.91"
                                            />
                                            <Blocos
                                                elemento="Fr"
                                                nAtom="87"
                                                nomeElemento="Frâncio"
                                                peso="223"
                                            />
                                        </Container01>

                                        <Container02>
                                            <Blocos
                                                nAtom="4"
                                                elemento="Be"
                                                nomeElemento="Berílio"
                                                peso="9.0122"
                                            />
                                            <Blocos
                                                nAtom="12"
                                                elemento="Mg"
                                                nomeElemento="Magnesio"
                                                peso="24.305"
                                            />
                                            <Blocos
                                                nAtom="20"
                                                elemento="Ca"
                                                nomeElemento="Cálcio"
                                                peso="40.078"
                                            />
                                            <Blocos
                                                nAtom="38"
                                                elemento="Sr"
                                                nomeElemento="Estrôncio"
                                                peso="87.62"
                                            />
                                            <Blocos
                                                nAtom="56"
                                                elemento="Ba"
                                                nomeElemento="Bário"
                                                peso="137.33"
                                            />
                                            <Blocos
                                                nAtom="88"
                                                elemento="Ra"
                                                nomeElemento="Rádio"
                                                peso="276"
                                            />
                                        </Container02>

                                        <Container03>
                                            <Blocos
                                                elemento="Sc"
                                                nAtom="21"
                                                nomeElemento="Escândio"
                                                peso="44.956"
                                            />
                                            <Blocos
                                                elemento="Ti"
                                                nAtom="22"
                                                nomeElemento="Titânio"
                                                peso="47.867"
                                            />
                                            <Blocos
                                                elemento="V"
                                                nAtom="23"
                                                nomeElemento="Vanádio"
                                                peso="50.942"
                                            />
                                            <Blocos
                                                elemento="Cr"
                                                nAtom="24"
                                                nomeElemento="Crômio"
                                                peso="51.996"
                                            />
                                            <Blocos
                                                elemento="Mn"
                                                nAtom="25"
                                                nomeElemento="Maganês"
                                                peso="54.938"
                                            />
                                            <Blocos
                                                elemento="Fe"
                                                nAtom="26"
                                                nomeElemento="Ferro"
                                                peso="55.845"
                                            />
                                            <Blocos
                                                elemento="Co"
                                                nAtom="27"
                                                nomeElemento="Cobalto"
                                                peso="58.933"
                                            />
                                            <Blocos
                                                elemento="Ni"
                                                nAtom="28"
                                                nomeElemento="Níquel"
                                                peso="58.693"
                                            />
                                            <Blocos
                                                elemento="Cu"
                                                nAtom="29"
                                                nomeElemento="Cobre"
                                                peso="63.546"
                                            />
                                            <Blocos
                                                elemento="Zn"
                                                nAtom="30"
                                                nomeElemento="Zinco"
                                                peso="65.38"
                                            />
                                        </Container03>

                                        <Container04>
                                            <Blocos
                                                elemento="Y"
                                                nAtom="39"
                                                nomeElemento="Ítrio"
                                                peso="88.906"
                                            />
                                            <Blocos
                                                elemento="Zr"
                                                nAtom="40"
                                                nomeElemento="Zircônio"
                                                peso="91.224"
                                            />
                                            <Blocos
                                                elemento="Nb"
                                                nAtom="41"
                                                nomeElemento="Nióbio"
                                                peso="92.906"
                                            />
                                            <Blocos
                                                elemento="Mo"
                                                nAtom="42"
                                                nomeElemento="Molibdênio"
                                                peso="95.95"
                                            />
                                            <Blocos
                                                elemento="Tc"
                                                nAtom="43"
                                                nomeElemento="Tecnécio"
                                                peso="98"
                                            />
                                            <Blocos
                                                elemento="Ru"
                                                nAtom="44"
                                                nomeElemento="Rutênio"
                                                peso="101.072"
                                            />
                                            <Blocos
                                                elemento="Rh"
                                                nAtom="45"
                                                nomeElemento="Ródio"
                                                peso="102.91"
                                            />
                                            <Blocos
                                                elemento="Pd"
                                                nAtom="46"
                                                nomeElemento="Paládio"
                                                peso="106.42"
                                            />
                                            <Blocos
                                                elemento="Ag"
                                                nAtom="47"
                                                nomeElemento="Prata"
                                                peso="107.87"
                                            />
                                            <Blocos
                                                elemento="Cd"
                                                nAtom="48"
                                                nomeElemento="Cádmio"
                                                peso="112.41"
                                            />
                                        </Container04>

                                    </Main>
                                } />
                        </Route>

                        <Route path="*" element={
                            <NotFound />
                        } />
                        
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

const Hidro = styled.div`
    grid-area: 1 / 1 / 2 / 2;
`

const Container01 = styled.div`
    grid-area: 2 / 1 / 7 / 2;
`

const Container02 = styled.div`
    grid-area: 2 / 2 / 7 / 3;
`

const Container03 = styled.div`
    margin-top: .4rem;
    grid-area: 4 / 3 / 5 / 13;
    display: flex;
    gap: .2rem;
`

const Container04 = styled.div`
    margin-top: .6rem;
    grid-area: 5 / 3 / 6 / 13;
    display: flex;
    gap: .2rem;
`

export default Ways;