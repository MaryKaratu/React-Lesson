import { useState } from "react";
import componentsImg from "./assets/components.png";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    //selectedButton => 'Component', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
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
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
