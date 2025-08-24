export default function Tabs({ button, children, buttonContainer }) {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
