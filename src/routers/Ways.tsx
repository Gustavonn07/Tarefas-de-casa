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

                                        <Container05>
                                            <Blocos
                                                elemento="Hf"
                                                nAtom="72"
                                                nomeElemento="Háfrio"
                                                peso="128.79"
                                            />
                                            <Blocos
                                                elemento="Ta"
                                                nAtom="73"
                                                nomeElemento="Tântalo"
                                                peso="100.048"
                                            />
                                            <Blocos
                                                elemento="W"
                                                nAtom="74"
                                                nomeElemento="Tungstênio"
                                                peso="183.84"
                                            />
                                            <Blocos
                                                elemento="Re"
                                                nAtom="75"
                                                nomeElemento="Rênio"
                                                peso="100.207"
                                            />
                                            <Blocos
                                                elemento="Os"
                                                nAtom="76"
                                                nomeElemento="Ósmio"
                                                peso="190.23"
                                            />
                                            <Blocos
                                                elemento="Ir"
                                                nAtom="77"
                                                nomeElemento="Irídio"
                                                peso="112.212"
                                            />
                                            <Blocos
                                                elemento="Pt"
                                                nAtom="78"
                                                nomeElemento="Platina"
                                                peso="178.064"
                                            />
                                            <Blocos
                                                elemento="Au"
                                                nAtom="79"
                                                nomeElemento="Ouro"
                                                peso="196.97"
                                            />
                                            <Blocos
                                                elemento="Hg"
                                                nAtom="80"
                                                nomeElemento="Mercurio"
                                                peso="200.089"
                                            />
                                        </Container05>

                                        <Container06>
                                            <Blocos
                                                elemento="Rf"
                                                nAtom="104"
                                                nomeElemento="Rutherfonio"
                                                peso="125.71"
                                            />
                                            <Blocos
                                                elemento="Db"
                                                nAtom="105"
                                                nomeElemento="Dúbino"
                                                peso="263"
                                            />
                                            <Blocos
                                                elemento="Sg"
                                                nAtom="106"
                                                nomeElemento="Sebórgio"
                                                peso="126.58"
                                            />
                                            <Blocos
                                                elemento="Bh"
                                                nAtom="107"
                                                nomeElemento="Bóhrnio"
                                                peso="270"
                                            />
                                            <Blocos
                                                elemento="Hs"
                                                nAtom="108"
                                                nomeElemento="Hássio"
                                                peso="278"
                                            />
                                            <Blocos
                                                elemento="Mt"
                                                nAtom="109"
                                                nomeElemento="Metnério"
                                                peso="278"
                                            />
                                            <Blocos
                                                elemento="Ds"
                                                nAtom="110"
                                                nomeElemento="Damstático"
                                                peso="281"
                                            />
                                            <Blocos
                                                elemento="Rg"
                                                nAtom="111"
                                                nomeElemento="Roentogênio"
                                                peso="291"
                                            />
                                            <Blocos
                                                elemento="Cn"
                                                nAtom="112"
                                                nomeElemento="Copernico"
                                                peso="275"
                                            />
                                        </Container06>

                                        <Container07>
                                            <Blocos
                                                elemento="B"
                                                nomeElemento="Boro"
                                                nAtom="5"
                                                peso="10.81"
                                            />
                                            <Blocos
                                                elemento="Ai"
                                                nomeElemento="Aluminio"
                                                nAtom="13"
                                                peso="26.982"
                                            />
                                            <Blocos
                                                elemento="Ga"
                                                nomeElemento="Gálio"
                                                nAtom="31"
                                                peso="68.112"
                                            />
                                            <Blocos
                                                elemento="In"
                                                nomeElemento="Indio"
                                                nAtom="49"
                                                peso="114.52"
                                            />
                                            <Blocos
                                                elemento="Ti"
                                                nAtom="81"
                                                nomeElemento="Tálio"
                                                peso="204.88"
                                            />
                                            <Blocos
                                                elemento="Nh"
                                                nAtom="113"
                                                nomeElemento="Nhório"
                                                peso="268"
                                            />
                                        </Container07>

                                        <Container08>
                                            <Blocos
                                                elemento="C"
                                                nAtom="6"
                                                nomeElemento="Carbono"
                                                peso="12.011"
                                            />
                                            <Blocos
                                                elemento="Si"
                                                nAtom="14"
                                                nomeElemento="Silicio"
                                                peso="28.085"
                                            />
                                            <Blocos
                                                elemento="Ge"
                                                nAtom="32"
                                                nomeElemento="Germânio"
                                                peso="76.630"
                                            />
                                            <Blocos
                                                elemento="Sn"
                                                nAtom="50"
                                                nomeElemento="Estanho"
                                                peso="118.71"
                                            />
                                            <Blocos
                                                elemento="Pb"
                                                nAtom="82"
                                                nomeElemento="Chumbo"
                                                peso="207.2"
                                            />
                                            <Blocos
                                                elemento="Fi"
                                                nAtom="114"
                                                nomeElemento="Fileróvio"
                                                peso="289"
                                            />
                                        </Container08>

                                        <Container09>
                                            <Blocos
                                                elemento="N"
                                                nAtom="7"
                                                nomeElemento="Nitrogênio"
                                                peso="14.007"
                                            />
                                            <Blocos
                                                elemento="P"
                                                nAtom="16"
                                                nomeElemento="Fósforo"
                                                peso="30.974"
                                            />
                                            <Blocos
                                                elemento="As"
                                                nomeElemento="Arsênio"
                                                nAtom="33"
                                                peso="74.922"
                                            />
                                            <Blocos
                                                elemento="Sb"
                                                nomeElemento="Antimônio"
                                                nAtom="51"
                                                peso="121.79"
                                            />
                                            <Blocos
                                                elemento="Bi"
                                                nAtom="83"
                                                nomeElemento="Bismuto"
                                                peso="208.98"
                                            />
                                            <Blocos
                                                elemento="Mc"
                                                nAtom="115"
                                                nomeElemento="Moscóvio"
                                                peso="289"
                                            />
                                        </Container09>

                                        <Container10>
                                            <Blocos
                                                nAtom="8"
                                                elemento="O"
                                                nomeElemento="Oxigênio"
                                                peso="15.999"
                                            />
                                            <Blocos
                                                nAtom="16"
                                                elemento="S"
                                                nomeElemento="Enxofre"
                                                peso="32.06"
                                            />
                                            <Blocos
                                                nAtom="34"
                                                elemento="Se"
                                                nomeElemento="Selênio"
                                                peso="78.971"
                                            />
                                            <Blocos
                                                nAtom="52"
                                                elemento="Te"
                                                nomeElemento="Telúrio"
                                                peso="121.79"
                                            />
                                            <Blocos
                                                nAtom="84"
                                                elemento="Po"
                                                nomeElemento="Polônio"
                                                peso="209"
                                            />
                                            <Blocos
                                                nAtom="116"
                                                elemento="Lv"
                                                nomeElemento="Livermorio"
                                                peso="293"
                                            />
                                        </Container10>

                                        <Container11>
                                            <Blocos
                                                nAtom="9"
                                                elemento="F"
                                                nomeElemento="Flúor"
                                                peso="18.998"
                                            />
                                            <Blocos
                                                nAtom="17"
                                                elemento="Cl"
                                                nomeElemento="Cloro"
                                                peso="35.45"
                                            />
                                            <Blocos
                                                nAtom="35"
                                                elemento="Br"
                                                nomeElemento="Bromo"
                                                peso="79.904"
                                            />
                                            <Blocos
                                                nAtom="53"
                                                elemento="I"
                                                nomeElemento="Iodo"
                                                peso="125.50"
                                            />
                                            <Blocos
                                                nAtom="85"
                                                elemento="At"
                                                nomeElemento="Ástato"
                                                peso="210"
                                            />
                                            <Blocos
                                                nAtom="117"
                                                elemento="Ts"
                                                nomeElemento="Tenesso"
                                                peso="294"
                                            />
                                        </Container11>

                                        <Container12>
                                            <Blocos 
                                                nAtom="2"
                                                elemento="He"
                                                nomeElemento="Hélio"
                                                peso="4.0026"
                                            />
                                            <Blocos 
                                                nAtom="10"
                                                elemento="Ne"
                                                nomeElemento="Neônio"
                                                peso="20.180"
                                            />
                                            <Blocos 
                                                nAtom="18"
                                                elemento="Ar"
                                                nomeElemento="Argônio"
                                                peso="39.943"
                                            />
                                            <Blocos 
                                                nAtom="36"
                                                elemento="Kr"
                                                nomeElemento="Criptônio"
                                                peso="83.798"
                                            />
                                            <Blocos 
                                                nAtom="54"
                                                elemento="Xe"
                                                nomeElemento="Xenênio"
                                                peso="131.29"
                                            />
                                            <Blocos 
                                                nAtom="86"
                                                elemento="Rn"
                                                nomeElemento="Radônio"
                                                peso="222"
                                            />
                                            <Blocos 
                                                nAtom="118"
                                                elemento="Og"
                                                nomeElemento="Oganessônio"
                                                peso="294"
                                            />
                                        </Container12>

                                        <Container13>
                                            <Blocos
                                                nAtom="57"
                                                elemento="La"
                                                nomeElemento="Latânio"
                                                peso="138.91"
                                            />
                                            <Blocos
                                                nAtom="58"
                                                elemento="Ce"
                                                nomeElemento="Cério"
                                                peso="140.12"
                                            />
                                            <Blocos
                                                nAtom="59"
                                                elemento="Pr"
                                                nomeElemento="Praseodimio"
                                                peso="140.91"
                                            />
                                            <Blocos
                                                nAtom="60"
                                                elemento="Nd"
                                                nomeElemento="Neodimio"
                                                peso="144.24"
                                            />
                                            <Blocos
                                                nAtom="61"
                                                elemento="Pm"
                                                nomeElemento="Promécio"
                                                peso="145"
                                            />
                                            <Blocos
                                                nAtom="62"
                                                elemento="Sm"
                                                nomeElemento="Samário"
                                                peso="150.36"
                                            />
                                            <Blocos
                                                nAtom="63"
                                                elemento="Eu"
                                                nomeElemento="Európio"
                                                peso="151.96"
                                            />
                                            <Blocos
                                                nAtom="64"
                                                elemento="Gd"
                                                nomeElemento="Gadolinio"
                                                peso="157.25"
                                            />
                                            <Blocos
                                                nAtom="65"
                                                elemento="Tb"
                                                nomeElemento="Térbio"
                                                peso="158.93"
                                            />
                                            <Blocos
                                                nAtom="66"
                                                elemento="Dy"
                                                nomeElemento="Diprósio"
                                                peso="162.50"
                                            />
                                            <Blocos
                                                nAtom="67"
                                                elemento="Ho"
                                                nomeElemento="Hólmio"
                                                peso="164.93"
                                            />
                                            <Blocos
                                                nAtom="68"
                                                elemento="Er"
                                                nomeElemento="Érbio"
                                                peso="167.26"
                                            />
                                            <Blocos
                                                nAtom="69"
                                                elemento="Tm"
                                                nomeElemento="Túlio"
                                                peso="168.93"
                                            />
                                            <Blocos
                                                nAtom="70"
                                                elemento="Yb"
                                                nomeElemento="Itérbio"
                                                peso="173.05"
                                            />
                                            <Blocos
                                                nAtom="71"
                                                elemento="Lu"
                                                nomeElemento="Lutécio"
                                                peso="174.97"
                                            />
                                        </Container13>

                                        <Container14>
                                            <Blocos
                                                nAtom="89"
                                                elemento="Ac"
                                                nomeElemento="Actinio"
                                                peso="227"
                                            />
                                            <Blocos
                                                nAtom="90"
                                                elemento="Th"
                                                nomeElemento="Tório"
                                                peso="232.04"
                                            />
                                            <Blocos
                                                nAtom="91"
                                                elemento="Pa"
                                                nomeElemento="Protactinio"
                                                peso="231.04"
                                            />
                                            <Blocos
                                                nAtom="92"
                                                elemento="U"
                                                nomeElemento="Urânio"
                                                peso="231.04"
                                            />
                                            <Blocos
                                                nAtom="93"
                                                elemento="Np"
                                                nomeElemento="Netúnio"
                                                peso="237"
                                            />
                                            <Blocos
                                                nAtom="94"
                                                elemento="Pu"
                                                nomeElemento="Plutônio"
                                                peso="244"
                                            />
                                            <Blocos
                                                nAtom="95"
                                                elemento="Am"
                                                nomeElemento="Américio"
                                                peso="243"
                                            />
                                            <Blocos
                                                nAtom="96"
                                                elemento="Cm"
                                                nomeElemento="Cúrio"
                                                peso="247"
                                            />
                                            <Blocos
                                                nAtom="97"
                                                elemento="Bk"
                                                nomeElemento="Bérquelio"
                                                peso="247"
                                            />
                                            <Blocos
                                                nAtom="98"
                                                elemento="Cf"
                                                nomeElemento="Califórnio"
                                                peso="251"
                                            />
                                            <Blocos
                                                nAtom="99"
                                                elemento="Es"
                                                nomeElemento="Einstênio"
                                                peso="252"
                                            />
                                            <Blocos
                                                nAtom="100"
                                                elemento="Fm"
                                                nomeElemento="Férmio"
                                                peso="257"
                                            />
                                            <Blocos
                                                nAtom="101"
                                                elemento="Md"
                                                nomeElemento="Mendelévio"
                                                peso="258"
                                            />
                                            <Blocos
                                                nAtom="102"
                                                elemento="No"
                                                nomeElemento="Nobélio"
                                                peso="259"
                                            />
                                            <Blocos
                                                nAtom="103"
                                                elemento="Lr"
                                                nomeElemento="Laurêncio"
                                                peso="262"
                                            />
                                        </Container14>
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

const Container05 = styled.div`
    margin-top: .9rem;
    grid-area: 6 / 4 / 7 / 13;
    display: flex;
    gap: .2rem;
`

const Container06 = styled.div`
    margin-top: 1.2rem;
    grid-area: 7 / 4 / 8 / 13;
    display: flex;
    gap: .2rem;
`

const Container07 = styled.div`
    margin-top: .2rem;
    grid-area: 2 / 13 / 3 / 14;
`

const Container08 = styled.div`
    margin-top: .2rem;
    grid-area: 2 / 14 / 3 / 15;
`

const Container09 = styled.div`
    margin-top: .2rem;
    grid-area: 2 / 15 / 3 / 16;
`

const Container10 = styled.div`
    margin-top: .2rem;
    grid-area: 2 / 16 / 3 / 17;
`

const Container11 = styled.div`
    margin-top: .2rem;
    grid-area: 2 / 17 / 3 / 18;
`

const Container12 = styled.div`
    margin-top: .2rem;
    grid-area: 1 / 18 / 8 / 19;
`

const Container13 = styled.div`
    margin-top: 5rem;
    grid-area: 8 / 4 / 9 / -1;
    display: flex;
    gap: .2rem;
`

const Container14 = styled.div`
    margin-top: 5rem;
    grid-area: 9 / 4 / 10 / -1;
    display: flex;
    gap: .2rem;
`

export default Ways;