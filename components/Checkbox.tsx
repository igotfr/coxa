/** @jsx jsx */
import { jsx } from "theme-ui";
import { ReactNode, HtmlHTMLAttributes, useState } from "react";

export default function Checkbox({ checked = true, children, ...atributos }: { checked: boolean, children: Array<ReactNode>, atributos: HtmlHTMLAttributes<HTMLLabelElement> }) {
  let useChecked: Function;
  [checked, useChecked] = useState<boolean>(checked);

  return (
    <span onClick={() => useChecked(!checked) } {...atributos}>
      { checked ? children[0] : children[1] }
      {children[2]}
    </span>
  );
}