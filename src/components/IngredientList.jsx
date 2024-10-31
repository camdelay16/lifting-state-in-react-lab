// src/components/IngredientList.jsx
const IngredientList = ({ ingredients, handleAddIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li
          key={index}
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
          <button onClick={() => handleAddIngredient(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
