import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  let ls = JSON.parse(localStorage.getItem("isLogin"));
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
      <Footer/>
    </Fragment>
  );
};

export default Layout;
