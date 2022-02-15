import { makeAutoObservable } from "mobx";

class CategoreyStore {
  constructor() {
    makeAutoObservable(this);
  }
}

const categoryStore = new CategoreyStore();
export default categoryStore;
