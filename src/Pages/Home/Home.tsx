import React from "react";
import FormInput from "../../Components/Forms/FormInput/FormInput";

function Home() {
  // const handleToggle = () => {
  //   setTimeout(() => {
  //     console.log("Hello");
  //   }, 1000);
  // };
  return (
    <div style={{ width: "500px", padding: "20px" }}>
      <FormInput
        inputId="test"
        placeholder="test"
        type="text"
        handleChange={() => {
          console.log("changing");
        }}
      />
    </div>
  );
}

export default Home;
