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
          texto = 'PARCEIROS'
          />


          <Footer>
            <FooterText
              text='Feito por Gustavo Nepomuceno &copy; 2023'
            />

            <div className="gap">
              <FooterRedesSociais
                img='src/images/github.svg'
                alt='icone do github'
                link='https://github.com/Gustavonn07'
              />

              <FooterRedesSociais
                img='src/images/instagram.svg'
                alt='icone do instagram'
                link='https://www.instagram.com/_gustavonep/'
              />

              <FooterRedesSociais
                img='src/images/linkedin.svg'
                alt='icone do linkedin'
                link='https://www.linkedin.com/in/gustavo-nepomuceno-657807272/'
              />
            </div>

          </Footer>
        </Navbar>

        <Header>
          <HeaderHeading
            texto='O FANTASTICO MUNDO'
            texto2='DOS PATOS'
          />

          <Darkmode />
        </Header>

        <CardGrid>
          <Card />

          <Card />

          <Card />

        </CardGrid>

        <GridGaleria>
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
          <GaleriaImagem />
          
        </GridGaleria>

      </GridPrincipal>
    </>
  )
}

export default App
