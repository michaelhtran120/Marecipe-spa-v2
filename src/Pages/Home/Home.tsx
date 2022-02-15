import React, { useState } from "react";
import TextNumInput from "../../Components/Forms/TextNumInput/TextNumInput";

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
    <div style={{ width: "500px", padding: "20px" }}>
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
