import Darkmode from "./components/Darkmode";
import GridPrincipal from "./components/GridPrincipal";
import Navbar from "./components/Navbar";
import NavbarList from "./components/NavbarList";
import Footer from "./components/Footer";
import FooterRedesSociais from "./components/FooterRedesSociais";
import FooterText from "./components/FooterText";
import Header from "./components/Header";
import HeaderHeading from "./components/HeaderHeading";
import CardGrid from "./components/CardGrid";
import CardHeading from "./components/CardHeading";
import Card from "./components/Card";
import GridGaleria from "./components/GridGaleria";
import GaleriaImagem from "./components/GaleriaImagem";

function App() {

  return (
    <>
      <GridPrincipal>

        <Navbar>
          <NavbarList
          texto = 'PATO SUPREMO'
          />

          <NavbarList
          texto = 'MAIS PATOS'
          />

          <NavbarList
          texto = 'PATOS BRILHANTES'
          />

          <NavbarList
          texto = 'PATOS MODELOS'
          />

          <NavbarList
          texto = 'PATOS LEGAIS'
          />


          <Footer>
            <FooterText
              text='Feito por Gustavo Nepomuceno &copy; 2023'
            />

            <div className="gap">
              <FooterRedesSociais
                img='images/github.svg'
                alt='icone do github'
                link='https://github.com/Gustavonn07'
              />

              <FooterRedesSociais
                img='images/instagram.svg'
                alt='icone do instagram'
                link='https://www.instagram.com/_gustavonep/'
              />

              <FooterRedesSociais
                img='images/linkedin.svg'
                alt='icone do linkedin'
                link='https://www.linkedin.com/in/gustavo-nepomuceno-657807272/'
              />
            </div>

          </Footer>
        </Navbar>

        <Header>
          <HeaderHeading
            texto='O FANTÁSTICO MUNDO'
            texto2='DOS PATOS'
          />

          <Darkmode />
        </Header>

        <CardGrid>
          <CardHeading
            texto="Motivos para patos serem incríveis:"
          />

          <div className="container__card">
            <Card
              imagemPato="images/funnyDuck.jpg"
              altPato="Um pato marrom andando na rua"
              icon="images/check.svg"
              altIcon="Um icone de certinho preto"
              text1="Patos são engraçados."
              text2="Patos são fullstack."
              text3="Patos são fofos."
              text4="Patos não são venenosos."
            />
            <Card
              imagemPato="images/rubberDuck.jpg"
              altPato="Um pato de borracha amarelo"
              icon="images/check.svg"
              altIcon="Um icone de certinho preto"
              text1="Patos são a alegria do banho."
              text2="Patos fazem quack."
              text3="Tio Patinhas é um pato."
              text4="Patolino o mago é um pato."
            />
            <Card
              imagemPato="images/susDuck.jpg"
              altPato="Um pato marrom olhando diretamente para a tela"
              icon="images/check.svg"
              altIcon="Um icone de certinho preto"
              text1="Patos são curiosos."
              text2="Patos tem bico."
              text3="Patos gostam de comer"
              text4="Patos não precisam de dentista"
            />
          </div>

        </CardGrid>

        <GridGaleria>
          <GaleriaImagem
            posicao="imagem galeria__imagem--pequena-1"
            imagem="images/patosm1.jpg"
            desc="Imagem pequena de um pato"
            imgsm={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--pequena-2"
            imagem="images/patosm2.jpg"
            desc="Imagem pequena de um pato"
            imgsm={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--pequena-3"
            imagem="images/patosm3.jpg"
            desc="Imagem pequena de um pato"
            imgsm={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--pequena-4"
            imagem="images/patosm4.jpg"
            desc="Imagem pequena de um pato"
            imgsm={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--pequena-5"
            imagem="images/patosm5.jpg"
            desc="Imagem pequena de um pato"
            imgsm={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--pequena-6"
            imagem="images/patosm6.jpg"
            desc="Imagem pequena de um pato"
            imgsm={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--pequena-7"
            imagem="images/patosm7.jpg"
            desc="Imagem pequena de um pato"
            imgsm={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--pequena-8"
            imagem="images/patosm8.jpg"
            desc="Imagem pequena de um pato"
            imgsm={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--mediaVertical-1"
            imagem="images/patomdv1.jpg"
            desc="Imagem de um pato na vertical"
            imgmdv={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--mediaVertical-2"
            imagem="images/patomdv2.jpg"
            desc="Imagem de um pato na vertical"
            imgmdv={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--mediaHorizontal-1"
            imagem="images/patomdh1.jpg"
            desc="Imagem de um pato na horizontal"
            imgmdh={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--mediaHorizontal-2"
            imagem="images/patomdh2.jpg"
            desc="Imagem de um pato na horizontal"
            imgmdh={true}
          />
          
          <GaleriaImagem
            posicao="imagem galeria__imagem--larga-1"
            imagem="images/patolg1.jpg"
            desc="Imagem grande de pato"
            imgsm={true}
          />

          <GaleriaImagem
            posicao="imagem galeria__imagem--larga-2"
            imagem="images/patolg2.jpg"
            desc="Imagem grande de pato"
            imgsm={true}
          />
          
        </GridGaleria>

      </GridPrincipal>
    </>
  )
}

export default App
