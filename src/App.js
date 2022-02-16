import logo from "./logo.svg";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import NavBar from "./components/NavBar";
import "./style/stolen.css";
import Header from "./components/Header";
import CardContainer from "./components/CardsContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <CardContainer />

      <Home />
      <Categories />

      <Recipes />
    </div>
  );
}

export default App;
