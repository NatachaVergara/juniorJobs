import {
  Col,
  Container,
  Row,
  Fragment,
  CardTitle,
  CardText,
  Button,
  Card,
} from "reactstrap";

export const FeaturedCard = () => {
  return (
    <Col>
    <Row>
      <a href="#">
        <Col sm="12">
          <Card body>
            <Row>
              <Col>Soy un avatar</Col>
              <Col>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
              </Col>
            </Row>
          </Card>
        </Col>
      </a>
    </Row>
    </Col>
  );
};

export default FeaturedCard;
