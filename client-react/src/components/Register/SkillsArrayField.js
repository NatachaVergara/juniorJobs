import { Field, ErrorMessage, FieldArray } from "formik";
import { Button, Col, Input, Label, Row } from "reactstrap";

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
                  <Input name={`skills.${index}.name`} type="select" />
                  {props.skillOptions}
                </Col>
                <Col>
                  <Label htmlFor={`skills.${index}.level`}>Email</Label>
                  <Input name={`skills.${index}.level`} type="select" />
                  {props.levelOptions}
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
