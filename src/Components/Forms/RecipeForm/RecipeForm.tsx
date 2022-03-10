/* eslint-disable jsx-a11y/img-redundant-alt */
// React Imports
import React, { useState } from "react";

// Component Import
import LabelInput from "../../LabelInput/LabelInput";

// Style import
import styles from "./RecipeForm.module.scss";

/**
 *
 * @returns JSX
 */
function RecipeForm(): JSX.Element {
  const [inputs, setInputs] = useState({
    title: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
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
    </form>
  );
}

export default RecipeForm;
