// `src/components/BurgerStack.jsx`
const BurgerStack = ({ ingredients, handleRemoveIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li
          key={index}
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
          <button onClick={() => handleRemoveIngredient(ingredient)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
