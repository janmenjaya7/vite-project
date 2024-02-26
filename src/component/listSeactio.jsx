import React from "react";
import CoreConcept from "./coreConcept";
import { CORE_CONCEPTS } from "./data";
function listSection() {
  return (
    <section id="core-concepts">
      <h2>core concept</h2>
      <ul>
        {CORE_CONCEPTS.map((contentitem) => (
          <CoreConcept key={contentitem.title} {...contentitem} />
        ))}
      </ul>
    </section>
  );
}
export default listSection;
