import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  products = [];

  createIngredient = async (newIngredient) => {
    try {
      const response = await instance.post("/ingredient", newIngredient);
      this.ingredients.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const IngredientStore = new IngredientStore();

export default ingredientStore;
