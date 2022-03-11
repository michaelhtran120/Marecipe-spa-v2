import React from "react";

// Style imports
import styles from "./IngredientInput.module.scss";

type Ingredients = {
  id: string;
  name: string;
  weight: string;
  proteins: string;
  carbs: string;
  fats: string;
};

type Props = {
  dataId: string;
  data: Ingredients;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
function IngredientInput({ dataId, handleChange, data }: Props) {
  return (
    <div className={styles.ingredient}>
      <div className={styles.input_1}>
        <input
          type="text"
          data-id={dataId}
          name="name"
          placeholder="Ingredient Name"
          onChange={handleChange}
          value={data.name}
          className={styles.input}
        />
      </div>
      <div className={styles.input_2}>
        <input
          type="number"
          data-id={dataId}
          name="weight"
          placeholder="Qty in grams"
          onChange={handleChange}
          value={data.weight}
          className={styles.input}
          autoComplete="off"
        />
      </div>
      <div className={styles.input_3}>
        <input
          type="number"
          data-id={dataId}
          name="carbs"
          placeholder="carbs"
          onChange={handleChange}
          value={data.carbs}
          className={styles.input}
        />
      </div>
      <div className={styles.input_4}>
        <input
          type="number"
          data-id={dataId}
          name="proteins"
          placeholder="proteins"
          onChange={handleChange}
          value={data.proteins}
          className={styles.input}
        />
      </div>
      <div className={styles.input_5}>
        <input
          type="number"
          data-id={dataId}
          name="fats"
          placeholder="fats"
          onChange={handleChange}
          value={data.fats}
          className={styles.input}
        />
      </div>
    </div>
  );
}

export default IngredientInput;
