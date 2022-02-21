//RecipesCard
import React from "react";

const Card = ({ recipe }) => {
  return (
    <div class="col mb-5" id="recepies" style={{ width: "350px" }}>
      <div class="card h-100">
        <img
          class="card-img-top"
          src={recipe.image}
          alt="..."
          style={{ height: "420px", objectFit: "cover" }}
        />

        <div class="card-body p-4">
          <div class="text-center">
            {/* <h5 class="fw-bolder"></h5> */}
            <h5 className="recipe-title">{recipe.title}</h5>
            <p></p>
          </div>
        </div>

        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
