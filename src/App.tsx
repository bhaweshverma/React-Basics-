import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let handleSelectItem = (item: string) => console.log(item);
  let [visible, setVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="CITIES"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {visible && <Alert onClose={() => setVisible(false)}>My Alert</Alert>}
      <Button
        color="warning"
        onButtonClick={() => {
          console.log("Button Clicked");
          setVisible(true);
        }}
      >
        Test Button
      </Button>
    </div>
  );
}

export default App;
