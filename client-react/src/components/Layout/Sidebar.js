import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import classes from "./Sidebar.module.scss";
import { MdOutlineCases,MdList,MdPersonOutline,MdBuild} from "react-icons/md";

export default function (props) {
  return (
    <Col tag="nav" xs="2" className="bg-secondary">
      <Row>
        <Nav vertical>
          <NavItem>
            <NavLink className={classes.anchor} href="/home">
              <Container fluid>
                <Row>
                  <Col sm="2">
                    <MdOutlineCases />
                  </Col>
                  <Col>Jobs for you</Col>
                </Row>
              </Container>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classes.anchor} href="/home">
              <Container fluid>
                <Row>
                  <Col sm="2">
                    <MdList />
                  </Col>
                  <Col>Jobs applied</Col>
                </Row>
              </Container>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classes.anchor} href="/home">
              <Container fluid>
                <Row>
                  <Col sm="2">
                    <MdPersonOutline />
                  </Col>
                  <Col>Profile</Col>
                </Row>
              </Container>
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink className={classes.anchor} href="/home">
              <Container fluid>
                <Row>
                  <Col sm="2">
                    <MdBuild />
                  </Col>
                  <Col>Resources</Col>
                </Row>
              </Container>
            </NavLink>
          </NavItem>
          
        </Nav>
      </Row>
    </Col>
  );
}
