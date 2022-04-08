import { Button, Col, Input, Label, Row } from "reactstrap";
const options = {
  skills: [
    <option value={0}>Select one</option>,
    <option value={1}>React</option>,
    <option value={2}>Angular</option>,
    <option value={3}>NET</option>,
    <option value={4}>C++</option>,
    <option value={5}>CSS</option>,
    <option value={6}>HTML5</option>,
  ],
  level: [
    <option value={0}>Beginner</option>,
    <option value={1}>Medium</option>,
    <option value={2}>Advanced</option>,
  ],
};

export default function SkillsArray(props) {
  return (
    <div>
      <Row key={props.index.toString()}>
        <Col>
          <Label htmlFor={`skills.${props.index}.name`}>Tech</Label>
          <Input name={`skills.${props.index}.name`} type="select">
            {options.skills}
          </Input>
        </Col>
        <Col>
          <Label htmlFor={`skills.${props.index}.level`}>Level</Label>
          <Input name={`skills.${props.index}.level`} type="select">
            {options.level}{" "}
          </Input>
        </Col>
        <Col>
          <Button
            type="button"
            className="primary"
            onClick={() => props.remove(props.index)}
          >
            REMOVE
          </Button>
        </Col>
      </Row>
    </div>
  );
}
