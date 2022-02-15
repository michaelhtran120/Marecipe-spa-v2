import React from "react";
import LabelInputV2 from "../../Components/LabelInput/LabelInputV2";

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
      <LabelInputV2
        inputId="login-email"
        label="E-mail address"
        type="email"
        handleChange={(event: any) => {
          console.log(event.target.value);
        }}
      />
      <LabelInputV2
        inputId="login-password"
        label="Password"
        type="password"
        handleChange={(event: any) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
}

export default Home;
