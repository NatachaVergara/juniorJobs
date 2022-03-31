import { Col, Row, CardTitle, CardText, Card } from "reactstrap";

const categoriesArray = [
    {category: 'Design', id: '123'},
    {category: 'Programming', id: '124'},
    {category: 'Data Science / Analytics', id: '125'}
  ];
  
const designJobs = [
    1, 2
]

const programmingJobs = [
    1, 2
]
  export default function MainContainer() {
    return (
      <>


{categoriesArray.map((c, i) => (
  <Row>
  
  <Col>
  <h1 key={i}>{c.category}</h1>
  {designJobs.map(() => 
            <Col>
            <Row>
              <a href="#">
                <Col sm="12">
                  <Card body>
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
              </a>
            </Row>
          </Col>
        )}
  </Col>
  </Row>
)
)} 
    </>
    );
  }