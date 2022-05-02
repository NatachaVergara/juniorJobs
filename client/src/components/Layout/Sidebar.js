import React from 'react';
import { Col, Nav, NavItem, Row } from "reactstrap";
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
          <Row  >
            <Nav className={classes.nav}>
              <NavItem>
                {userType === 'Recruiter' ? 
                <Link className={classes.link} to="/newjob">
                
                    <Row>
                      <Col >
                        <MdList />
                        
                        Post a new offer
                      </Col>                      
                    </Row>
                
                </Link> :
                  <Link className={classes.link} to="/profile">
                  
                      <Row>
                        <Col>
                          <MdList />                          
                          Jobs applied
                        </Col>
                        
                      </Row>
                   
                  </Link>}
              </NavItem>

              {userType === 'Talent' && 
              <NavItem>
                <Link className={classes.link} to="/resources">
               
                    <Row >
                      <Col>
                        <MdBuild />
                       
                       Resources
                      </Col>
                     
                    </Row>
                 
                </Link>
              </NavItem>}


            </Nav>
          </Row>
        </Col>
      }


    </>
  )
}
