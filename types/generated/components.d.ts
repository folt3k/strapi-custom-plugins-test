import type { Schema, Attribute } from "@strapi/strapi";

export interface IngredientsIgnredientCategory extends Schema.Component {
  collectionName: "components_ingredients_ignredient_categories";
  info: {
    displayName: "IngredientCategory";
    description: "";
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    ingredients: Attribute.Component<"ingredients.ingredient", true>;
  };
}

export interface IngredientsIngredient extends Schema.Component {
  collectionName: "components_ingredients_ingredients";
  info: {
    displayName: "Ingredient";
    description: "";
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "ingredients.ignredient-category": IngredientsIgnredientCategory;
      "ingredients.ingredient": IngredientsIngredient;
    }
  }
}
