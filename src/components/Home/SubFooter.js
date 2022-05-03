import { Col, Row } from "reactstrap";

let jobsByCategory = [
  "Design / UX",
  "Programming",
  "Data Science / Analytics",
  "Mobile",
  "Customer Support",
];

let jobsByCountry = ["Remote", "Chile", "Peru", "Mexico"];

let jobsByCity = ["Santiago", "Lima", "City of Mexico", "Rancagua"];

let jobsByTag = ["Back-end", "Javascript", "English", "Front-end"];

const SubFooter = () => (
  <Row>
    <Col sm='4'>
      <h3>Jobs by Category</h3>
      {jobsByCategory.map((e, i) => (
        <Col key={i}>
          <Row>
            {" "}
            <ul>
              <li>
                <a href="/" >
                  {e}
                </a>
              </li>
            </ul>
          </Row>
        </Col>
      ))}
    </Col>
    <Col sm='4'>
      <h3>Jobs by Country</h3>
      {jobsByCountry.map((e, i) => (
        <Col key={i}>
          <Row>
            {" "}
            <ul>
              <li>
                <a href="/" >
                  {e}
                </a>
              </li>
            </ul>
          </Row>
        </Col>
      ))}
      <h3>Jobs by City</h3>
      {jobsByCity.map((e, i) => (
        <Col key={i}>
          <Row>
            {" "}
            <ul>
              <li>
                <a href="/" >
                  {e}
                </a>
              </li>
            </ul>
          </Row>
        </Col>
      ))}
    </Col>
    <Col sm='4'>
      <h3>Jobs by tags</h3>
      {jobsByTag.map((e, i) => (
        <Col key={i}>
          <Row>
            {" "}
            <ul>
              <li>
                <a href="/" >
                  {e}
                </a>
              </li>
            </ul>
          </Row>
        </Col>
      ))}
    </Col>
  </Row>
);

export default SubFooter;