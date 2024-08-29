import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Info from "./Components/Header/info";
import Content from "./Components/PreMenu/content";
import Itembar from "./Components/PreMenu/itembar";
import FirstItem from "./Components/Menu/FirstItem";
import Footer from "./Components/Footer/Footer";
import SubFooter from "./Components/Footer/SubFooter";

function App() {
  return (
    <div>
      <Info />
      <Navbar />
      <Content />
      <Itembar />
      <FirstItem />
      <Footer />
      <SubFooter />
    </div>
  );
}

export default App;
