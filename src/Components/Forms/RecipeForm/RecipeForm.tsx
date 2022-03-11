/* eslint-disable jsx-a11y/img-redundant-alt */

// React and library imports
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Component Import
import LabelInput from "../../LabelInput/LabelInput";

// Style import
import styles from "./RecipeForm.module.scss";

type Ingredients = {
  id: string;
  name: string;
  weight: string;
  proteins: string;
  carbs: string;
  fats: string;
};

function RecipeForm(): JSX.Element {
  const [inputs, setInputs] = useState({
    title: "",
    imageUrl: "",
    description: "",
  });

  const [ingredientList, setIngredientList] = useState<Ingredients[]>([
    {
      id: uuidv4(),
      name: "",
      weight: "",
      carbs: "",
      proteins: "",
      fats: "",
    },
  ]);

  const addIngredient = () => {
    setIngredientList([
      ...ingredientList,
      {
        id: uuidv4(),
        name: "",
        weight: "",
        carbs: "",
        proteins: "",
        fats: "",
      },
    ]);
  };

  let updatedIngredientList: Ingredients[];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, dataset } = event.target;
    switch (name) {
      case "title":
      case "imageUrl":
      case "description":
        setInputs({
          ...inputs,
          [name]: value,
        });
        break;
      case "name":
      case "weight":
      case "carbs":
      case "proteins":
      case "fats":
        updatedIngredientList = ingredientList.map((aIngredient) => {
          if (aIngredient.id === dataset.id) {
            return {
              ...aIngredient,
              [name]: value,
            };
          }
          return aIngredient;
        });
        setIngredientList(updatedIngredientList);
        break;
      default:
    }
  };

  useEffect(() => {
    console.log(ingredientList, inputs);
  }, [ingredientList, inputs]);

  return (
    <form className={styles.recipe_form_container}>
      <div className={styles.input_image_container}>
        <div className={styles.left_side}>
          <LabelInput
            label="Recipe Title"
            inputId="title"
            type="text"
            handleChange={handleChange}
          />
          <LabelInput
            label="Image URL"
            inputId="imageUrl"
            type="text"
            handleChange={handleChange}
          />
          <LabelInput
            label="Description"
            inputId="description"
            type="textarea"
            handleChange={handleChange}
          />
        </div>
        <div className={styles.right_side}>
          {inputs.imageUrl ? (
            <img src={inputs.imageUrl} alt="recipe photo submitted by user" />
          ) : null}
        </div>
      </div>
      <div className={styles.bottom_container}>
        {ingredientList.map((i) => (
          <div key={i.id} className={styles.ingredient}>
            <LabelInput
              label="Ingredient Name"
              inputId="name"
              type="text"
              dataId={i.id}
              handleChange={handleChange}
            />
            <LabelInput
              label="Qty in grams"
              inputId="weight"
              type="number"
              dataId={i.id}
              handleChange={handleChange}
            />
            <LabelInput
              label="Carbs"
              inputId="carbs"
              type="number"
              dataId={i.id}
              handleChange={handleChange}
            />
            <LabelInput
              label="Proteins"
              inputId="proteins"
              type="number"
              dataId={i.id}
              handleChange={handleChange}
            />
            <LabelInput
              label="Fats"
              inputId="fats"
              type="number"
              dataId={i.id}
              handleChange={handleChange}
            />
          </div>
        ))}
        <button type="button" onClick={addIngredient}>
          Add
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
