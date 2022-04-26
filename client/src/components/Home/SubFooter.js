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
    <Col>
      <h1>Jobs by Category</h1>
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
    <Col>
      <h1>Jobs by Country</h1>
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
      <h1>Jobs by City</h1>
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
    <Col>
      <h1>Jobs by tags</h1>
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
