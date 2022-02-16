import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
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
      <CategoriesList />
      <CardContainer />

      <Home />

      <Recipes />
    </div>
  );
}

export default App;
