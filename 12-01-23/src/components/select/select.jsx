import "./select.css";

export const Select = (props) => {
  const { selectChangeHandler } = props;
  return (
    <form>
      <select defaultValue={""} onChange={selectChangeHandler}>
        <option disabled value="">
          Seleziona Componente da renderizzare
        </option>
        <option value="bank">Bank</option>
        <option value="beer">Beer</option>
        <option value="bloodType">Blood Type</option>
        <option value="creditCard">Credit Card</option>
      </select>
    </form>
  );
};
