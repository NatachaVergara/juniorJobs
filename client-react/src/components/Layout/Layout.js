import { Fragment } from "react";
//import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import MainNavigation from "./MainNavigation";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  
  return (
    <Fragment>
      <MainNavigation />
      <Container fluid>
        <Row>
         <Sidebar />          
          <Col
            tag="main"
            md={{
              offset: 0,
              size: 10,
            }}
            sm="12"
          >
            {props.children}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
