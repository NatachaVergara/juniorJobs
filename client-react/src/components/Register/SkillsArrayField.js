import { Field, ErrorMessage, FieldArray } from "formik";
import { Button, Col, Input, Label, Row } from "reactstrap";
const options = {
  skills: [
    <option value="">Select one</option>,
    <option value="React">React</option>,
    <option value="Angular">Angular</option>,
    <option value="NET">NET</option>,
    <option value="C++">C++</option>,
    <option value="CSS">CSS</option>,
    <option value="HTML5">HTML5</option>,
  ],
  level: [
    <option value="Beginner">Beginner</option>,
    <option value="Medium">Medium</option>,
    <option value="Advanced">Advanced</option>,
  ],
};
export default function SkillsArray(props) {
  return (
    <FieldArray name="skills">
      {({ remove, push }) => (
        <div>
          {props.skills.length > 0 &&
            props.skills.map((skill, index) => (
              <Row key={index.toString()}>
                <Col>
                  <Label htmlFor={`skills.${index}.name`}>Tech</Label>
                  <Input name={`skills.${index}.name`} type="select">
                    {options.skills}
                  </Input>
                </Col>
                <Col>
                  <Label htmlFor={`skills.${index}.level`}>Level</Label>
                  <Input name={`skills.${index}.level`} type="select">
                    {options.level}{" "}
                  </Input>
                </Col>
                <Col>
                  <Button
                    type="button"
                    className="primary"
                    onClick={() => remove(index)}
                  >
                    REMOVE
                  </Button>
                </Col>
              </Row>
            ))}
          <Button
            className="secondary"
            onClick={() => push({ name: "", level: "" })}
          >
            Add Skill
          </Button>
        </div>
      )}
    </FieldArray>
  );
}
