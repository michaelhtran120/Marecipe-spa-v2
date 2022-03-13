/* eslint-disable jsx-a11y/img-redundant-alt */

// React and library imports
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../Buttons/Button";

// Component Import
import LabelInput from "../../LabelInput/LabelInput";
import IngredientInput from "./IngredientInputs/IngredientInput";

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
  const [addIngredientBtnState, setAddIngredientBtnState] = useState(false);

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

  useEffect(() => {
    const checkForEmpty = () => {
      for (let i = 0; i < ingredientList.length; i += 1) {
        if (
          ingredientList[i].name === "" ||
          ingredientList[i].weight === "" ||
          ingredientList[i].carbs === "" ||
          ingredientList[i].proteins === "" ||
          ingredientList[i].fats === ""
        ) {
          return true;
        }
      }
      return false;
    };
    setAddIngredientBtnState(checkForEmpty());
  }, [ingredientList]);

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

  useEffect(() => {
    console.log(ingredientList, inputs);
  }, [ingredientList, inputs]);

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

  return (
    <form autoComplete="off" className={styles.recipe_form_container}>
      <div className={styles.input_image_container}>
        <div className={styles.left_side}>
          <LabelInput
            label="Recipe Title"
            inputId="title"
            type="text"
            handleChange={handleChange}
            value={inputs.title}
            autocomplete="false"
          />
          <LabelInput
            label="Image URL"
            inputId="imageUrl"
            type="text"
            handleChange={handleChange}
            value={inputs.imageUrl}
            autocomplete="false"
          />
          <LabelInput
            label="Description"
            inputId="description"
            type="textarea"
            handleChange={handleChange}
            value={inputs.description}
          />
        </div>
        <div className={styles.right_side}>
          {inputs.imageUrl ? (
            <img src={inputs.imageUrl} alt="recipe photo submitted by user" />
          ) : null}
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.ingredients_container}>
          {ingredientList.map((i) => (
            <IngredientInput
              key={i.id}
              dataId={i.id}
              data={i}
              handleChange={handleChange}
            />
          ))}
          <Button
            variant="primary"
            handleClick={addIngredient}
            disabled={addIngredientBtnState}
          >
            Add Ingredient
          </Button>
        </div>
        <div className={styles.instructions_container}>Instructions</div>
      </div>
    </form>
  );
}

export default RecipeForm;
