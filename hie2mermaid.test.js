import * as t from "https://deno.land/std/testing/asserts.ts";
import { hie2mermaid } from "./hie2mermaid.js";

Deno.test("simple", () => {
  const s = 
`a
  b
  c
`;
  t.assertEquals(hie2mermaid(s), `flowchart TD
a --> b
a --> c
`)
});
Deno.test("two", () => {
  const s = 
`a
  b
  c
a2
  d
  f
`;
  t.assertEquals(hie2mermaid(s), `flowchart TD
a --> b
a --> c
a2 --> d
a2 --> f
`)
});
Deno.test("level3", () => {
  const s = 
`a
  b
   abc
   def
  c
`;
  t.assertEquals(hie2mermaid(s), `flowchart TD
a --> b
b --> abc
b --> def
a --> c
`)
});
Deno.test("level3 with mean", () => {
  const s = 
`a
  parent: b
   x: abc
   y: def
  c
`;
  t.assertEquals(hie2mermaid(s), `flowchart TD
a --> |parent| b
b --> |x| abc
b --> |y| def
a --> c
`)
});
Deno.test("link", () => {
  const s = 
`a
  https://fukuno.jig.jp/
  twitter: https://twitter.com/taisukef
`;
  t.assertEquals(hie2mermaid(s), `flowchart TD
a --> https://fukuno.jig.jp/
click https://fukuno.jig.jp/ "https://fukuno.jig.jp/"
a --> |twitter| https://twitter.com/taisukef
click https://twitter.com/taisukef "https://twitter.com/taisukef"
`)
});
