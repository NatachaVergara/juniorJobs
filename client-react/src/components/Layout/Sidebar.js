import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

export default function (props) {
  return (
    <Col xs="1">
      <Row>
        <ul>
          <li>
            <Link to="/home">Sidebar</Link>
          </li>
          <li>
            <Link to="/home">Sidebar</Link>
          </li>
          <li>
            <Link to="/home">Sidebar</Link>
          </li>
        </ul>
      </Row>
    </Col>
  );
}
