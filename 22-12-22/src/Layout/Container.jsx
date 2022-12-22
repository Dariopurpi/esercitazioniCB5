import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { Button } from "../atoms/button/Button";
import { Text } from "../atoms/button/text/Text";
import "./Container.css";

export function Container(props) {
  const { title = "Al click del bottone stampo in console" } = props;

  return (
    <div className="container">
      <Header />
      <Text>{title}</Text>
      <Button variant="red">Red</Button>
      <Button variant="blue">blue</Button>
      <Button variant="green">green</Button>
      <Footer />
    </div>
  );
}
