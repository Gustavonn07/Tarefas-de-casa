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
          <NavbarList />

          <Footer>
            <FooterText />

            <FooterRedesSociais />
          </Footer>
        </Navbar>

        <Header>
          <HeaderHeading />

          <Darkmode />
        </Header>

        <CardGrid>
          <Card />
        </CardGrid>

        <GridGaleria>
          <GaleriaImagem />
        </GridGaleria>

      </GridPrincipal>
    </>
  )
}

export default App
