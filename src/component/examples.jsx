import { useState } from "react";
import TabButton from "./Tabbutton.jsx";
import { EXAMPLES } from "./data.js";

function ExamplesSec() {
  let [selectedTopic, setSelectedTopic] = useState();
  function handelSelect(selectButton) {
    setSelectedTopic(selectButton);
  }
  let tabcontent = <p>plese select a topic</p>;
  if (selectedTopic) {
    tabcontent = (
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
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handelSelect("components")}
          >
            components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handelSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handelSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handelSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {tabcontent}
      </section>
    </>
  );
}
export default ExamplesSec;
