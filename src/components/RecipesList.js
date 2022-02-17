import React from "react";
import { observer } from "mobx-react";
import recipeStore from "../stores/recipesStore";
import Card from "./RecipesCard";

function RecipesList() {
  const recipesList = recipeStore.recipes.map((recipe) => (
    <Card key={recipe.id} recipe={recipe} />
  ));

  return (
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {recipesList}
        </div>
      </div>
    </section>
  );
}

export default observer(RecipesList);
