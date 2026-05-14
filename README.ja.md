# graph-hie

インデントされた階層構造のテキストから自動的に[Mermaid.js](https://mermaid-js.github.io/mermaid/#/)のフローチャートを生成するWebコンポーネントです。

## デモ

- [graph-hie tag test page](https://code4fukui.github.io/graph-hie/)
- [simple](https://code4fukui.github.io/graph-hie/simple.html)

## 特徴

- シンプルなカスタムHTML要素 `<graph-hie>` で階層データを可視化します。
- シンプルなインデント付きテキストをMermaid.jsのフローチャートに自動変換します。
- 2スペースのインデントで親子関係を定義します。
- `label: value` 構文でラベル付きエッジを作成します。
- URLを自動的にクリック可能なリンクにします。
- 複数のルートノードと深いネスト構造をサポートします。

## 使い方

1. HTMLファイルに `graph-hie.js` スクリプトを読み込みます。Mermaid.jsライブラリの読み込みはコンポーネントが自動的に処理します。

    ```html
    <script type="module" src="https://code4fukui.github.io/graph-hie/graph-hie.js"></script>
    ```

2. 階層構造のテキストを `<graph-hie>` タグで囲みます。

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

これにより、以下の図が自動的にレンダリングされます。

![コード例から生成された階層図。"福野泰介"がルートノードです。4つの子ノードがあります："https://fukuno.jig.jp/"（エッジラベル"web"）、"https://twitter.com/taisukef"（エッジラベル"Twitter"）、"1978"（エッジラベル"誕生年"）、"CANON_V-10"（エッジラベル"初パソコン"）。"CANON_V-10"ノードには2つの子ノードがあります："MSX"（エッジラベル"種類"）と"https://canon.jp/"（エッジラベル"メーカー"）。"MSX"ノードには1つの子ノードがあります："https://ja.wikipedia.org/wiki/MSX"（エッジラベル"wikipedia"）。すべてのURLノードはクリック可能です。](https://user-images.githubusercontent.com/1554958/235277156-f9530416-291d-400f-897c-9b57b9605342.png)

## 構文ルール

- **階層:** 各インデントは必ず**半角スペース2つ**にしてください。
- **ノード:** テキストの各行が1つのノードを表します。
- **ラベル付きエッジ:** `label: value` の形式で記述すると、親ノードから `value` という名前の新しいノードへのエッジが作成され、そのエッジに `label` というラベルが付きます。
- **ラベルなしエッジ:** `value` のみを記述した行は、親ノードから `value` ノードへのラベルなしエッジを作成します。
- **リンク:** ノード名がURL（`http://` または `https://` で始まる）の場合、クリック可能なリンクとしてレンダリングされます。

## 制限事項

- ノード名に空白（スペース）、アットマーク（`@`）、セミコロン（`;`）は使用できません。代用としてアンダースコア（`_`）などの有効な文字を使用してください。

## 依存関係

- [Mermaid.js](https://mermaid-js.github.io/mermaid/#/) （コンポーネントによって自動的に読み込まれます）

## ライセンス

[MIT](LICENSE)
