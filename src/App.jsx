import Collections from "./components/Collections";
import FIlms from "./components/FIlms";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Series from "./components/Series";
import Widow from "./components/Widow";

const App = () => {
  return (
    <>
      <header>
        <Nav />
        <Intro />
      </header>
      <main>
        <FIlms/>
        <Widow/>
        <Collections/>
        <Series/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
