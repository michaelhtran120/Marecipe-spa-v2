/* eslint-disable jsx-a11y/img-redundant-alt */

// React and library imports
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    <form className={styles.recipe_form_container}>
      <div className={styles.input_image_container}>
        <div className={styles.left_side}>
          <LabelInput
            label="Recipe Title"
            inputId="title"
            type="text"
            handleChange={handleChange}
            value={inputs.title}
          />
          <LabelInput
            label="Image URL"
            inputId="imageUrl"
            type="text"
            handleChange={handleChange}
            value={inputs.imageUrl}
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
        <div key={ingredientList[0].id} className={styles.ingredient}>
          <div className={styles.input_1}>
            <LabelInput
              label="Ingredient Name"
              inputId="name"
              type="text"
              dataId={ingredientList[0].id}
              handleChange={handleChange}
              value={ingredientList[0].name}
            />
          </div>
          <div className={styles.input_2}>
            <LabelInput
              label="Qty in grams"
              inputId="weight"
              type="number"
              dataId={ingredientList[0].id}
              handleChange={handleChange}
              value={ingredientList[0].weight}
            />
          </div>
          <div className={styles.input_3}>
            <LabelInput
              label="Carbs"
              inputId="carbs"
              type="number"
              dataId={ingredientList[0].id}
              handleChange={handleChange}
              value={ingredientList[0].carbs}
            />
          </div>
          <div className={styles.input_4}>
            <LabelInput
              label="Proteins"
              inputId="proteins"
              type="number"
              dataId={ingredientList[0].id}
              handleChange={handleChange}
              value={ingredientList[0].proteins}
            />
          </div>
          <div className={styles.input_5}>
            <LabelInput
              label="Fats"
              inputId="fats"
              type="number"
              dataId={ingredientList[0].id}
              handleChange={handleChange}
              value={ingredientList[0].fats}
            />
          </div>
        </div>
        {ingredientList.length > 1
          ? ingredientList
              .slice(1)
              .map((i) => (
                <IngredientInput
                  key={i.id}
                  dataId={i.id}
                  data={i}
                  handleChange={handleChange}
                />
              ))
          : null}
        <button
          type="button"
          onClick={addIngredient}
          disabled={addIngredientBtnState}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
