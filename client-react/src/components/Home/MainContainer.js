import { Col, Row, CardTitle, CardText, Card } from "reactstrap";
import {categoriesArray} from './dbHome'

const jobs = [1, 2];
export default function MainContainer() {

  return (
    <>
      {categoriesArray.map((c, i) => (
        <Row key={i}>
          <Col >
            <h1 key={i}>{c.category}</h1>
            {jobs.map((j,i) => (
              <Col key={i}>
                <Row>
                  <a href="/">
                    <Col sm="12">
                      <Card body>
                        <Row>
                          <Col sm="3">
                            <img
                              src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png"
                              width="96px"
                              height="96px"
                              style={{ borderRadius: "20px" }}
                              alt="Logo"
                            />
                          </Col>
                          <Col>
                            <CardTitle tag="h5">{c.jobs[0].jobTitle}</CardTitle>
                            <CardText>
                              Remote/Location - Fulltime - 1500USD
                            </CardText>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </a>
                </Row>
              </Col>
            ))}
          </Col>
        </Row>
      ))}
    </>
  );
}
