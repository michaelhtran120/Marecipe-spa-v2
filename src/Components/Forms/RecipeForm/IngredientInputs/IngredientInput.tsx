import React from "react";

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
    <>
      <input
        type="text"
        data-id={dataId}
        name="name"
        onChange={handleChange}
        value={data.name}
      />
      <input
        type="number"
        data-id={dataId}
        name="weight"
        onChange={handleChange}
        value={data.weight}
      />
      <input
        type="number"
        data-id={dataId}
        name="carbs"
        onChange={handleChange}
        value={data.carbs}
      />
      <input
        type="number"
        data-id={dataId}
        name="proteins"
        onChange={handleChange}
        value={data.proteins}
      />
      <input
        type="number"
        data-id={dataId}
        name="fats"
        onChange={handleChange}
        value={data.fats}
      />
    </>
  );
}

export default IngredientInput;
