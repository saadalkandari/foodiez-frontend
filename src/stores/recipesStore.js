import { makeAutoObservable } from "mobx";
import recipesData from "../data/recipesData";

class RecipesStore {
  recipes = recipesData;
  constructor() {
    makeAutoObservable(this);
  }
}

const recipeStore = new RecipesStore();
export default recipeStore;
