import Darkmode from "./components/Darkmode";
import GridPrincipal from "./components/GridPrincipal";
import Navbar from "./components/Navbar";
import NavbarList from "./components/NavbarList";
import Footer from "./components/Footer";
import FooterRedesSociais from "./components/FooterRedesSociais";
import FooterText from "./components/FooterText";

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

        <Darkmode />
      </GridPrincipal>
    </>
  )
}

export default App
