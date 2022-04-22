import { Link } from "react-router-dom";
import { Col, Row, CardTitle, CardText, Card } from "reactstrap";

export const FeaturedCard = ({ color, offer }) => {
  console.log(offer)
  return (
    <Col className='p-3'>
      <Row>
        <Link to='/job'>
          <Col sm="12">
            <Card body color={color}>
              <Row>
                {/* <Col sm="3">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png"
                    width="96px"
                    height="96px"
                    style={{borderRadius : "20px"}} alt="Logo"
                  />
                </Col> */}
                <Col>
                  <CardTitle tag="h5">{offer.title} </CardTitle>
                  <CardText>{offer.description} </CardText>
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
