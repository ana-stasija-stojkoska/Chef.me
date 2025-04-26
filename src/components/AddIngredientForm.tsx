interface AddIngredientFormProps {
  addIngredient: (ingredient: string) => void;
}

const AddIngredientForm = ({ addIngredient }: AddIngredientFormProps) => {
  function handleSubmit(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient && typeof newIngredient === "string") {
      addIngredient(newIngredient);
    }
  }

  return (
    <div className="wrapper px-3 px-sm-5 mt-5">
      <form
        id="add-ingredient-form"
        className="d-flex justify-content-center gap-2"
        action={handleSubmit}
      >
        <div id="add-ingredient-input" className="form-outline flex-grow-1">
          <input
            type="text"
            name="ingredient"
            className="form-control shadow-sm"
            placeholder="e.g. onion"
            aria-label="Input ingredient"
          />
        </div>
        <button
          id="add-ingredient-button"
          type="submit"
          className="btn btn-dark"
        >
          + Add ingredient
        </button>
      </form>
    </div>
  );
};

export default AddIngredientForm;
