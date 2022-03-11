import React from "react";
import RecipeForm from "../../Components/Forms/RecipeForm/RecipeForm";

function Home() {
  // const handleToggle = () => {
  //   setTimeout(() => {
  //     console.log("Hello");
  //   }, 1000);
  // };

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        paddingTop: "20px",
        color: "white",
      }}
    >
      Home Page
      <br />
      <RecipeForm />
    </div>
  );
}

export default Home;
