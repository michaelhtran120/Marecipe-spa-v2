import React from "react";
import RecipeForm from "../../Components/Forms/RecipeForm/RecipeForm";

function Home() {
  // const handleToggle = () => {
  //   setTimeout(() => {
  //     console.log("Hello");
  //   }, 1000);
  // };

  return (
    <div style={{ height: "120px", width: "500px", padding: "20px" }}>
      Home Page
      <br />
      <RecipeForm />
    </div>
  );
}

export default Home;
