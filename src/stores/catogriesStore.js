import { makeAutoObservable } from "mobx";
import instance from "./instance";
import recipeStore from "./recipesStore";

class CategoreyStore {
  constructor() {
    makeAutoObservable(this);
  }
  categories = [];

  addCategory = (category) => {
    category.id = this.categories[this.categories.length - 1].id + 1;
    this.categories = [...this.categories, category];
  };

  fetchCategoryRecipes = async (categoryId) => {
    try {
      const categoryRecipes = await instance.get(`/categories/${categoryId}`);
      console.log(categoryRecipes.data);
      recipeStore.recipes = categoryRecipes.data;
    } catch (error) {
      console.log("catogriesStore -> getCategoryRecipies -> error", error);
    }
  };

  getAllCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.log("CategoreyStore -> getAllCategories -> error", error);
    }
  };

  createCategory = async (newCategory) => {
    try {
      const response = await instance.post("/categories", newCategory);
      this.categories.push(response.data);
    } catch (error) {
      console.log("CategoreyStore -> creatCategories -> error", error);
    }
  };
}

const categoryStore = new CategoreyStore();
categoryStore.getAllCategories();
export default categoryStore;
