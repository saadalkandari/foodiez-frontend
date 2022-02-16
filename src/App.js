import Home from "./components/Home";
import RecipesList from "./components/RecipesList";
import CategoriesList from "./components/CategoriesList";
import NavBar from "./components/NavBar";
import "./style/stolen.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <RecipesList />
      <Home />
      <CategoriesList />
    </div>
  );
}

export default App;
