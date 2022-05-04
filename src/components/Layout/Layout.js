import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "./Footer";
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
          >
            {props.children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
