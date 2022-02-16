import { makeAutoObservable } from "mobx";
import categoriesData from "../components/categoriesData";

class CategoreyStore {
  constructor() {
    makeAutoObservable(this);
  }
  categories = categoriesData;

  addCategory = (category) => {
    category.id = this.categories[this.categories.length - 1].id + 1;
    this.categories = [...this.categories, category];
  };
}

const categoryStore = new CategoreyStore();
export default categoryStore;
