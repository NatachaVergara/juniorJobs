import { Link } from "react-router-dom";
import { Col, Row, CardTitle, CardText, Card } from "reactstrap";

export const FeaturedCard = ({ color }) => {
  return (
    <Col>
      <Row>
        <Link to='/job'>
          <Col sm="12">
            <Card body color={color}>
              <Row>
                <Col sm="3">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png"
                    width="96px"
                    height="96px"
                    style={{borderRadius : "20px"}} alt="Logo"
                  />
                </Col>
                <Col>
                  <CardTitle tag="h5">Job Title</CardTitle>
                  <CardText>Remote/Location - Fulltime - 1500USD</CardText>
                </Col>
              </Row>
            </Card>
          </Col>
        </Link>
      </Row>
    </Col>
  );
};

export default FeaturedCard;
