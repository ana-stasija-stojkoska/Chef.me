import { useEffect, useRef } from "react";
import Markdown from "react-markdown";

interface RecipeProps {
  ingredients: string[];
  recipe: string;
  getRecipe: () => void;
}

const Recipe = ({ recipe, getRecipe }: RecipeProps) => {
  const recipeSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  return (
    <>
      <div className="wrapper px-3 px-sm-5 mt-4 mb-4" ref={recipeSection}>
        <div className="recipe-wrapper bg-light rounded">
          <div className="div1">
            Ready for a recipe?
          </div>
          <div className="div2">
            <button className="btn btn-danger" onClick={getRecipe}>
              Generate recipe
            </button>
          </div>
          {recipe != "" && (
            <div className="div3">
              <Markdown>{recipe}</Markdown>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Recipe;
