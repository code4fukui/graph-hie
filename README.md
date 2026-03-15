# graph-hie

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web component that generates a graph hierarchy visualization using the Mermaid.js library.

## Demo

- [graph-hie tag test page](https://code4fukui.github.io/graph-hie/)
- [simple](https://code4fukui.github.io/graph-hie/simple.html)

## Features

- Hierarchical data visualization using a custom `<graph-hie>` HTML element
- Converts hierarchical data in a specific format to Mermaid.js flowchart syntax
- Supports links and other annotations in the hierarchy

## Requirements

- [Mermaid.js](https://mermaid-js.github.io/mermaid/#/) library

## Usage

Include the `graph-hie.js` script and use the `<graph-hie>` element with your hierarchical data:

```html
<script type="module" src="https://code4fukui.github.io/graph-hie/graph-hie.js"></script>

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

The hierarchy is expressed using 2-space indentation.

## License

MIT License