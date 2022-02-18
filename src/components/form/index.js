import React from "react";
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmail,
  Link,
  Input,
  Submit,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FromBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Error = function FromError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};
Form.Title = function FromTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Form.Text = function FromText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.TextSmail = function FromTextSmail({ children, ...restProps }) {
  return <TextSmail {...restProps}>{children}</TextSmail>;
};
Form.Link = function FromLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Form.Input = function FromInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
Form.Submit = function FromSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
