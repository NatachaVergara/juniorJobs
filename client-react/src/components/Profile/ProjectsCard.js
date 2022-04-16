import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import classes from "./ProjectsCard.module.scss";

export default function ProjectsCard(props) {
  return (
    <Card body color="light" className={classes.profile}>
      <CardBody>
        <CardTitle tag="h5">Projects</CardTitle>
        <CardText>Mostrar proyectos realizados</CardText>
        <div>
          <Card body color="light" className={classes.projects}>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card body color="light" className={classes.projects}>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
}
