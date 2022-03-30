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

export default function Profile() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <ProfileCard />
          </Col>
          <Col lg="8">
            <ProjectsCard />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
