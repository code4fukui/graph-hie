# graph-hie

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web component that automatically generates a [Mermaid.js](https://mermaid-js.github.io/mermaid/#/) flowchart from indented hierarchical text.

## Demo

- [graph-hie tag test page](https://code4fukui.github.io/graph-hie/)
- [simple](https://code4fukui.github.io/graph-hie/simple.html)

## Features

-   Visualize hierarchical data with a simple `<graph-hie>` custom HTML element.
-   Automatically converts a simple, indented text format into a Mermaid.js flowchart.
-   Define parent-child relationships using 2-space indentation.
-   Create labeled edges with `label: value` syntax.
-   Automatically makes URLs clickable.
-   Supports multiple root nodes and deeply nested structures.

## Usage

1.  Include the `graph-hie.js` script in your HTML file. The component will handle loading the Mermaid.js library.

    ```html
    <script type="module" src="https://code4fukui.github.io/graph-hie/graph-hie.js"></script>
    ```

2.  Wrap your hierarchical text inside a `<graph-hie>` tag.

    ```html
    <graph-hie>
    福野泰介
      web: https://fukuno.jig.jp/
      Twitter: https://twitter.com/taisukef
      誕生年: 1978
      初パソコン: CANON_V-10
        種類: MSX
          wikipedia: https://ja.wikipedia.org/wiki/MSX
        メーカー: https://canon.jp/
    </graph-hie>
    ```

This will automatically render the following diagram:


![A flowchart diagram showing the hierarchy from the code example. "福野泰介" is the root node. It has four child nodes: "https://fukuno.jig.jp/" with an edge label "web", "https://twitter.com/taisukef" with an edge label "Twitter", "1978" with an edge label "誕生年", and "CANON_V-10" with an edge label "初パソコン". The "CANON_V-10" node has two children: "MSX" with an edge label "種類" and "https://canon.jp/" with an edge label "メーカー". The "MSX" node has one child: "https://ja.wikipedia.org/wiki/MSX" with an edge label "wikipedia". All URL nodes are clickable.](https://user-images.githubusercontent.com/1554958/235277156-f9530416-291d-400f-897c-9b57b9605342.png)


## Syntax Rules

-   **Hierarchy:** Each level of indentation must be exactly **2 spaces**.
-   **Nodes:** Each line of text represents a node.
-   **Labeled Edges:** A line in the format `label: value` creates an edge from the parent node to a new node named `value`, with the edge labeled `label`.
-   **Unlabeled Edges:** A line with just `value` creates an unlabeled edge from the parent to the `value` node.
-   **Links:** If a node's name is a URL (starts with `http://` or `https://`), it will be rendered as a clickable link.

## Limitations

-   Node names cannot contain spaces, at-signs (`@`), or semicolons (`;`). Please use underscores (`_`) or other valid characters as substitutes.

## Dependencies

-   [Mermaid.js](https://mermaid-js.github.io/mermaid/#/) (loaded automatically by the component)

## License

[MIT](LICENSE)