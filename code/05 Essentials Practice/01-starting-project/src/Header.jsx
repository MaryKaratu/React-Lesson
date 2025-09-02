import investmentLogo from "../src/assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentLogo} alt="investment-calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
