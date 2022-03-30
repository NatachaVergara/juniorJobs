import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import classes from './Sidebar.module.scss'

export default function (props) {
  return (
    <Col tag="nav" xs="1" className={classes.sidebar}>
      <Row>
        <ul>
          <li>
            <Link to="/jos-applied">Jobs applied</Link>
          </li>
          <li>
            <Link to="/jobs-for-you">Jobs for you</Link>
          </li>
          <li>
            <Link to="/edit-profile">Edit your profile</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </Row>
    </Col>
  );
}
