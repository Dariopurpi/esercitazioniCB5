import "./Button.css";

export function Button(props) {
  const { children, ...otherAttributes } = props;
  return <button>{children}</button>;
}
