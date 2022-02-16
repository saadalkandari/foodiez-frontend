import logo from "./logo.svg";
import Home from "./components/Home";
import Categories from "./components/Categories";
import RecipesList from "./components/RecipesList";
import NavBar from "./components/NavBar";
import "./style/stolen.css";
import Header from "./components/Header";
import CardContainer from "./components/CardsContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <RecipesList />
      <Home />
      <Categories />
    </div>
  );
}

export default App;
