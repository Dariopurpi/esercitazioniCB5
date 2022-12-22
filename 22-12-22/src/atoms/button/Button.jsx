import "./Button.css";

export function Button(props) {
  const { className = "", variant = "none", ...otherAttributes } = props;
  function log() {
    console.log("Hello world");
  }
  return (
    <button
      onClick={log}
      className={`btn btn--variant-${variant}`}
      {...otherAttributes}
    ></button>
  );
}
