import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

const AddData = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function addDataHandler() {
    if (date.trim().length === 0 || time.trim().length === 0) {
      return;
    }

    props.addDataHandler({
      date: new Date(date).toLocaleString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      time: time,
      id: Math.random().toString(),
    });

    setDate("");
    setTime("");
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <Form.Control
        value={date}
        onChange={(event) => setDate(event.target.value)}
        size="lg"
        type="date"
        placeholder=""
      />
      <br />
      <Form.Control
        value={time}
        onChange={(event) => setTime(event.target.value)}
        size="lg"
        type="time"
        placeholder=""
      />
      <br />
      <Button
        onClick={addDataHandler}
        style={{ display: "block", margin: "0 auto" }}
        size="lg"
      >
        Додати Дані
      </Button>
    </div>
  );
};

export default AddData;
