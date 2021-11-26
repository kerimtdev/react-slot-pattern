import React from "react";
import Card from "./components/Card";
import "./styles/app.css";

function App() {
  return (
    <div>
      <Card>
        <Card.Slot name="Header">
          <h1>Card Header</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card.Slot>
        <Card.Slot name="Body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus officia saepe porro blanditiis laboriosam debitis
            corrupti, vero consequatur cumque adipisci itaque distinctio sint
            dolorum repudiandae aspernatur nihil iure optio minima?
          </p>
        </Card.Slot>
      </Card>
    </div>
  );
}

export default App;
