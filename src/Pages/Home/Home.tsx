import React from "react";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm";

function Home() {
  // const handleToggle = () => {
  //   setTimeout(() => {
  //     console.log("Hello");
  //   }, 1000);
  // };

  return (
    <div style={{ height: "120px", width: "500px", padding: "20px" }}>
      <LoginForm />
    </div>
  );
}

export default Home;
