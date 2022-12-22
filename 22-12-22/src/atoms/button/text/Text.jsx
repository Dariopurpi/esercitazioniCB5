import "./Text.css";

export const Text = (props) => {
  const { as = "h1", children, ...othherAttributes } = props;

  const Element = as;

  return <Element>{children}</Element>;
};
