import { useState } from "react";
import Header from "./Header";
import UserInput from "./UserInput";
import Results from "./Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 2000,
    expectedReturn: 4,
    duration: 8,
  });

  function handleChange(userInputValue, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [userInputValue]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />;
      <UserInput handleChange={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
