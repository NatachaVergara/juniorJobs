import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
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
