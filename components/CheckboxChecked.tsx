/** @jsx jsx */
import { jsx } from "theme-ui";
import { ReactNode, HtmlHTMLAttributes } from "react";

export default function CheckboxChecked({ children, ...atributos }: { children: ReactNode, atributos: HtmlHTMLAttributes<HTMLLabelElement> }) {
  return (
    <span {...atributos}>
      {children}
    </span>
  );
}