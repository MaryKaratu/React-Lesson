import { useState } from "react";
import componentsImg from "./assets/components.png";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleSelect(selectedButton) {
    //selectedButton => 'Component', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleSelect("component")}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons onSelect={() => handleSelect("props")}>
              Props
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("state")}>
              State
            </TabButtons>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
