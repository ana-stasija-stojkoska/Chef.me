interface IngredientsListProps {
  ingredients: string[];
}

const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <>
      {ingredients.length > 0 && (
        <div className="wrapper px-3 px-sm-5 mt-5">
          <div id="ing-wrapper">
            <h3 className="mb-3">Ingredients on hand:</h3>
            <ul>{ingredientListItems}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default IngredientsList;
