# graph-hie

graph-hieは、階層構造をMermaid形式のフローチャートに変換するWebコンポーネントです。

## デモ
- [graph-hie tag test page](https://code4fukui.github.io/graph-hie/)
- [シンプルなサンプル](https://code4fukui.github.io/graph-hie/simple.html)

## 機能
- 階層構造を2つの空白文字でインデントして表現できます
- 各要素にラベルとリンクを設定できます

## 必要環境
- [Mermaid.js](https://mermaid-js.github.io/mermaid/#/)

## 使い方
`<graph-hie>` タグでコンテンツを囲むことで、Mermaid形式のフローチャートが自動生成されます。

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

## ライセンス
MIT License