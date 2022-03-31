import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import classes from "./Sidebar.module.scss";
import { MdOutlineCases,MdList,MdPersonOutline,MdBuild} from "react-icons/md";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
 let [isLG, setIsLG] = useState(false)
  console.log(isLG)

  useEffect(() => {
    setIsLG(JSON.parse(localStorage.getItem('isLogin')))
   }, [isLG])


  return (
   <>   
      {isLG && <Col tag="nav" xs="2" className="bg-secondary">
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
 }
   
  
    </>
  )
}
