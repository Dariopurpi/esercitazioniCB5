import "./button.css";
export function Button(props) {
  console.clear();

  const { className = "none", variant = "", ...otherAttributes } = props;

  return (
    <button
      className={`button button--variant-${variant} ${className}`}
      {...otherAttributes}
    ></button>
  );
}
