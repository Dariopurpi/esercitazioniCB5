export function button() {
  const log = () => {
    console.log("hello world");
  };

  return (
    <button onClick={log} id="btnId" className="btn">
      click me
    </button>
  );
}
