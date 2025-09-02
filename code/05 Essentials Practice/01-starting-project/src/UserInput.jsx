import { useState } from "react";

export default function UserInput() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 2000,
    expectedReturn: 4,
    Duration: 8,
  });

  function handleChange(userInputValue, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [userInputValue]: newValue,
      };
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => handleChange("initalIvestment", e.target.value)}
            value={UserInput}
            required
          />
        </p>
        <p>
          <label>Annual InvestmentT</label>
          <input
            type="number"
            onChange={(e) => handleChange("annuallIvestment", e.target.value)}
            value={UserInput}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
            value={UserInput}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(e) => handleChange("duration", e.target.value)}
            value={UserInput}
            required
          />
        </p>
      </div>
    </div>
  );
}
