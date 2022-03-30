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
import ProfileCard from "./ProfileCard";
import ProjectsCard from "./ProjectsCard";

export default function Profile(props) {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <ProfileCard onEdit={props.onEdit} onDelete={props.onDelete} />
          </Col>
          <Col lg="8">
            <ProjectsCard />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
