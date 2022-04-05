import React from 'react';
import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import classes from "./Sidebar.module.scss";
import { MdOutlineCases,MdList,MdPersonOutline,MdBuild} from "react-icons/md";
import { useUserContext } from '../../Store/UserContext';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const { isUser } = useUserContext()

  return (
   <>   
      {isUser && <Col tag="nav" xs="2" className="bg-secondary">
        <Row>
          <Nav vertical>
            <NavItem>
              <Link className={classes.anchor} to="/">
                <Container fluid>
                  <Row>
                    <Col sm="2">
                      <MdOutlineCases />
                    </Col>
                    <Col>Jobs for you</Col>
                  </Row>
                </Container>
              </Link>
            </NavItem>
            <NavItem>
              <Link className={classes.anchor} to="/">
                <Container fluid>
                  <Row>
                    <Col sm="2">
                      <MdList />
                    </Col>
                    <Col>Jobs applied</Col>
                  </Row>
                </Container>
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link className={classes.anchor} to="/profile">
                <Container fluid>
                  <Row>
                    <Col sm="2">
                      <MdPersonOutline />
                    </Col>
                    <Col>Profile</Col>
                  </Row>
                </Container>
              </Link>
            </NavItem> */}

            <NavItem>
              <Link className={classes.anchor} to="/resources">
                <Container fluid>
                  <Row>
                    <Col sm="2">
                      <MdBuild />
                    </Col>
                    <Col>Resources</Col>
                  </Row>
                </Container>
              </Link>
            </NavItem>

          </Nav>
        </Row>
      </Col>
 }
   
  
    </>
  )
}
