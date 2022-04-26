import React from 'react';
import { Col, Container, Nav, NavItem, Row } from "reactstrap";
import classes from "./Sidebar.module.scss";
import { MdList, MdBuild } from "react-icons/md";
import { useUserContext } from '../../Store/UserContext';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const { isUser, userType } = useUserContext()

  return (
    <>
      {isUser &&
        <Col tag="nav" xs="12" md="2" className={classes.anchor}>
          <Row className={classes.nav} >
            <Nav>
              <NavItem>

                {userType === 'Recruiter' ? <Link className={classes.anchor} to="/newjob">
                  <Container fluid>
                    <Row>
                      <Col sm="2">
                        <MdList />
                      </Col>
                      <Col>Post a new offer</Col>
                    </Row>
                  </Container>
                </Link> :
                  <Link className={classes.anchor} to="/profile">
                    <Container fluid>
                      <Row>
                        <Col sm="2">
                          <MdList />
                        </Col>
                        <Col>Jobs applied</Col>
                      </Row>
                    </Container>
                  </Link>}
              </NavItem>

              {userType === 'Talent' && <NavItem>
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
              </NavItem>}


            </Nav>
          </Row>
        </Col>
      }


    </>
  )
}
