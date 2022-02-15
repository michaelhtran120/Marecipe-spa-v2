import React, { useState } from "react";
import TextNumInput from "../../Components/Forms/Input/Input";
import Label from "../../Components/Forms/Label/Label";

function Home() {
  // const handleToggle = () => {
  //   setTimeout(() => {
  //     console.log("Hello");
  //   }, 1000);
  // };
  const [input, setInput] = useState("");
  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <div style={{ height: "120px", width: "500px", padding: "20px" }}>
      <Label title="test label" inputId="test" />
      <TextNumInput
        inputId="test"
        placeholder="test"
        type="text"
        handleChange={handleChange}
        value={input}
      />
    </div>
  );
}

export default Home;
