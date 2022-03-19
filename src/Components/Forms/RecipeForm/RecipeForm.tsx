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

type RecipeGeneralInputs = {
  title: string;
  imageUrl: string;
  description: string;
};

type Ingredients = {
  id: string;
  name: string;
  weight: string;
  proteins: string;
  carbs: string;
  fats: string;
};

type Instruction = {
  id: string;
  instruction: string;
};

function RecipeForm(): JSX.Element {
  const [addIngredientBtnState, setAddIngredientBtnState] = useState(false);

  const [addInstructionsBtnState, setAddInstructionBtnState] = useState(false);

  const [inputs, setInputs] = useState<RecipeGeneralInputs>({
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

  const [instructionList, setInstructionList] = useState<Instruction[]>([
    {
      id: uuidv4(),
      instruction: "",
    },
  ]);

  // Logic to disable add ingredient/instruction buttons.
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

  useEffect(() => {
    const checkForEmpty = () => {
      for (let i = 0; i < instructionList.length; i += 1) {
        if (instructionList[i].instruction === "") return true;
      }
      return false;
    };

    setAddInstructionBtnState(checkForEmpty());
  }, [instructionList]);

  // Methods to handle adding an ingredient and instructions.
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

  const addInstruction = () => {
    setInstructionList([
      ...instructionList,
      {
        id: uuidv4(),
        instruction: "",
      },
    ]);
  };

  // Methods to handle deleting an ingredient and instructions.

  const deleteIngredient = (id: string) => {
    setIngredientList(
      ingredientList.filter((ingredient) => ingredient.id !== id)
    );
  };

  const deleteInstruction = (id: string) => {
    setInstructionList(
      instructionList.filter((instruction) => instruction.id !== id)
    );
  };

  useEffect(() => {
    console.log(ingredientList, inputs, instructionList);
  }, [ingredientList, inputs, instructionList]);

  let updatedIngredientList: Ingredients[];
  let updatedInstructionList: Instruction[];

  // Method that updates all input states
  const handleInputChange = (
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
      case "instruction":
        updatedInstructionList = instructionList.map((aInstruction) => {
          if (aInstruction.id === dataset.id) {
            return {
              ...aInstruction,
              instruction: value,
            };
          }
          return aInstruction;
        });
        setInstructionList(updatedInstructionList);
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
            handleChange={handleInputChange}
            value={inputs.title}
            autocomplete="false"
          />
          <LabelInput
            label="Image URL"
            inputId="imageUrl"
            type="text"
            handleChange={handleInputChange}
            value={inputs.imageUrl}
            autocomplete="false"
          />
          <LabelInput
            label="Description"
            inputId="description"
            type="textarea"
            handleChange={handleInputChange}
            value={inputs.description}
          />
        </div>
        <div className={styles.right_side}>
          {inputs.imageUrl ? (
            <img src={inputs.imageUrl} alt="recipe photo submitted by user" />
          ) : null}
        </div>
      </div>
      <hr />
      <div className={styles.bottom_container}>
        <div className={styles.ingredients_container}>
          <h3>Ingredients</h3>
          {ingredientList.map((i) => (
            <div className={styles.ingredient_list_item}>
              <IngredientInput
                key={i.id}
                dataId={i.id}
                data={i}
                handleChange={handleInputChange}
              />
              <Button
                variant="danger"
                handleClick={() => deleteIngredient(i.id)}
              >
                X
              </Button>
            </div>
          ))}
          <Button
            variant="primary"
            handleClick={addIngredient}
            disabled={addIngredientBtnState}
          >
            Add Ingredient
          </Button>
        </div>
        <hr />
        <div className={styles.instructions_container}>
          <h3>Instructions</h3>
          <ol className={styles.instruction_list}>
            {instructionList.map((instruction) => (
              <li className={styles.instruction}>
                <input
                  key={instruction.id}
                  value={instruction.instruction}
                  name="instruction"
                  data-id={instruction.id}
                  onChange={handleInputChange}
                  className={styles.instruction_input}
                />
                <Button
                  variant="danger"
                  handleClick={() => deleteInstruction(instruction.id)}
                >
                  X
                </Button>
              </li>
            ))}
          </ol>
          <br />
          <Button
            variant="primary"
            handleClick={addInstruction}
            disabled={addInstructionsBtnState}
          >
            Add Ingredient
          </Button>
        </div>
      </div>
    </form>
  );
}

export default RecipeForm;
