import { useState } from "react";
import "./App.css";
import Bank from "./components/Bank/Bank";
import Beer from "./components/Beer/Beer";
import Blood_types from "./components/Blood_types/Blood_types";
import Credit_card from "./components/Credit_card/Credit_card";
import { Select } from "./components/select/select";

const DefaultComponent = () => {
  return <div>Non hai selezionato nessun componente</div>;
};

const componentsMap = {
  beer: Beer,
  bank: Bank,
  bloodType: Blood_types,
  creditCard: Credit_card,
  default: DefaultComponent,
};

function App() {
  const [componentRender, setComponentRender] = useState("default");

  const selectChangeHandler = (event) => {
    setComponentRender(event.target.value);
  };
  const DynamicComponent = componentsMap[componentRender];
  return (
    <div className="App">
      <Select selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />
      {/*<Bank />
      <Beer />
      <Blood_types />
  <Credit_card />*/}
    </div>
  );
}

export default App;
