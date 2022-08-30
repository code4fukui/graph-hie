const getIndent = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      return i;
    }
  }
  return 0;
};

const getName = (s) => {
  /*
  if (s[0] == "|") {
    return s.substring(s.indexOf("|", 1) + 1).trim();
  }
  */
  const n = s.indexOf(": ");
  if (n > 0) {
    return s.substring(n + 1).trim();
  }
  return s;
};
const cnv = (s) => {
  const n = s.indexOf(": ");
  if (n > 0) {
    return "|" + s.substring(0, n).trim() + "| " + s.substring(n + 1).trim();
  }
  return s;
};

export const hie2mermaid = (hie) => {
  const ss = hie.split("\n");
  const res = [];
  res.push("flowchart TD");
  const cur = [];
  let curindent = -1;
  for (let s of ss) {
    if (s.length == 0) {
      continue;
    }
    const indent = getIndent(s) / 2;
    s = s.trim();
    if (curindent == -1) {
    } else if (curindent == indent) {
      cur.pop();
    } else if (curindent < indent) {
    } else {
      for (let i = 0; i <= curindent - indent; i++) {
        cur.pop();
      }
    }
    cur.push(s);
    if (cur.length > 1) {
      const p = cur[cur.length - 2];
      res.push(getName(p) + " --> " + cnv(s));
      const s2 = getName(s);
      if (s2.startsWith("http://") || s2.startsWith("https://")) {
        res.push(`click ${s2} "${s2}"`);
      }
    }
    curindent = indent;
  }
  const res2 = res.join("\n") + "\n";
  //console.log(res2);
  return res2;
};
