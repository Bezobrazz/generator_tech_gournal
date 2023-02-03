import { Container } from "react-bootstrap";
import React, { useState } from "react";
import AddData from "./components/AddData";
import InputItems from "./components/InputItems";

function App() {
  const [addData, setAddData] = useState([
    {
      id: 1,
      date: new Date().toLocaleString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      time: "01:23",
    },
    {
      id: 2,
      date: "01.02.2023",
      time: "03:00",
    },
    {
      id: 3,
      date: "02.02.2023",
      time: "00:23",
    },
  ]);

  const onAddDataHandler = (data) => {
    setAddData((prevData) => {
      return [data, ...prevData];
    });
  };

  return (
    <Container style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }} className="text-center ">
        Журнал Генератора
      </h1>
      <AddData addData={addData} addDataHandler={onAddDataHandler}></AddData>
      <InputItems addData={addData} setAddData={setAddData}></InputItems>
    </Container>
  );
}
export default App;
