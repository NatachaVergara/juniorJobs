import { Fragment } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardImg,
} from "reactstrap";
import classes from "./Profile.module.scss";

export default function Profile() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg="8">
            <Card body color="dark" outline>
              <CardBody>
                <CardTitle tag="h5">Projects</CardTitle>

                <CardText>Mostrar proyectos realizados</CardText>
                <div>
                  <Card body color="dark" outline>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                      </CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card body color="dark" outline>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                      </CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card body color="dark" outline className={classes.card}>
              <CardImg
                src="https://media.istockphoto.com/photos/young-character-actor-headshot-picture-id1211061995?k=20&m=1211061995&s=170667a&w=0&h=KtUBCp33OpGS9VfQ35IIJB8jF7aC1r7tMhI_Rqlxh5I="
                width="100%"
                top
              ></CardImg>
              <CardTitle tag="h5">Pepe el programador</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                About me
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Contactos
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Tech stack
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </Card>
          </Col>
        </Row>

        <Button color="dark">EDIT</Button>
        <Button color="dark">DELETE</Button>
      </Container>
    </Fragment>
  );
}
