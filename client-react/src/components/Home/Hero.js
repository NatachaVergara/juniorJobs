import { Row, Col } from "reactstrap";
import JobAreas from "./JobAreas";

const Hero = () => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <strong>300,000+</strong>
            <p>Professionals</p>
          </Col>
          <Col>
            <strong>9,000+</strong>
            <p>Companies</p>
          </Col>
          <Col>
            <strong>1,000,000+</strong>
            <p>applications sent</p>
          </Col>
        </Row>
      </Col>

      <Col>
        <JobAreas />
      </Col>
    </Row>
  );
};

export default Hero;
