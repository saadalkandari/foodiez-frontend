import RecipesList from "./components/RecipesList";
import CategoriesList from "./components/CategoriesList";
import NavBar from "./components/NavBar";
import "./style/stolen.css";
import "./App.css";
import Header from "./components/Header";
import IngredientsList from "./components/IngredientsList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />

      <CategoriesList />

      <RecipesList />
      <IngredientsList />
    </div>
  );
}

export default App;
