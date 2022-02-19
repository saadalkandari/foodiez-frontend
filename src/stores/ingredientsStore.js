import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  ingredients = [];

  createIngredient = async (newIngredient) => {
    try {
      const response = await instance.post("/ingredient", newIngredient);
      this.ingredients.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  getAllIngredients = async () => {
    try {
      const response = await instance.get("/ingredient");
      this.ingredients = response.data;
    } catch (error) {
      console.log("CategoreyStore -> getAllCategories -> error", error);
    }
  };
}

const ingredientStore = new IngredientStore();
ingredientStore.getAllIngredients();
export default ingredientStore;
