import { makeAutoObservable } from "mobx";

import instance from "./instance";

class RecipesStore {
  recipes = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchAllRrecipes = async () => {
    try {
      const response = await instance.get("/recipies");
      this.recipes = response.data;
    } catch (error) {
      console.log("recipesStore -> fetchAllRrecipes -> error", error);
    }
  };

  createRecipe = async (newRecipe) => {
    try {
      console.log(newRecipe);
      const formData = new FormData();
      for (const property in newRecipe)
        formData.append(property, newRecipe[property]);

      const response = await instance.post("/recipies", formData);
      this.recipes.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: recipesStore.js ~ line 16 ~ recipesStore ~ createRecipe = ~ error",
        error
      );
    }
  };

  handleImage = () => {};
}

const recipeStore = new RecipesStore();
recipeStore.fetchAllRrecipes();

console.log(recipeStore.recipes);
export default recipeStore;
