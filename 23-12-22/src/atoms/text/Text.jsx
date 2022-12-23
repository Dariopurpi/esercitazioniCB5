import "./Text.css";

export function Text(props) {
  const { children, ...otherAttributes } = props;
  return <p>{children}</p>;
}
