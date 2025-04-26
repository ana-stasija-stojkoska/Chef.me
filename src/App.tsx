import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import IngredientsList from "./components/IngredientsList";
import AddIngredientForm from "./components/AddIngredientForm";
import Recipe from "./components/Recipe";
import {getRecipeFromMistral} from './api.ts'

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");

  const addIngredient = (ingredient: string) => {
    const cleaned = ingredient.trim().toLowerCase();
    if (cleaned && !ingredients.includes(cleaned)) {
      setIngredients((prev) => [...prev, cleaned]);
    }
  };

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    if (recipeMarkdown) {
      setRecipe(recipeMarkdown);
    }
  };

  return (
    <>
      <Nav />
      <AddIngredientForm addIngredient={addIngredient} />
      <IngredientsList ingredients={ingredients} />
      {ingredients.length >= 4 && (
        <Recipe
          ingredients={ingredients}
          recipe={recipe}
          getRecipe={getRecipe}
        />
      )}
    </>
  );
}

export default App;
