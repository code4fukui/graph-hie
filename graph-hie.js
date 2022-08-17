import mermaid from "https://unpkg.com/mermaid@9.1.5/dist/mermaid.esm.min.mjs";
import { hie2mermaid } from "./hie2mermaid.js";

class GraphHie extends HTMLElement {
  constructor() {
    super();
    this.textContent = hie2mermaid(this.textContent);
    this.className = "mermaid";
  }
};

customElements.define("graph-hie", GraphHie);

export { GraphHie };
