import React from "react";
import LoginFormTwo from "../../Components/Forms/LoginForm/LabelInputV2";

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
      <LoginFormTwo />
    </div>
  );
}

export default Home;
