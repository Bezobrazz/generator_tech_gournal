import Card from "react-bootstrap/Card";

const InputItems = (props) => {
  return (
    <div>
      {props.addData.map((data) => (
        <Card style={{ marginBottom: "10px" }} key={data.id}>
          <Card.Body>
            Дата: {data.date} <br /> Час: {data.time}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default InputItems;
