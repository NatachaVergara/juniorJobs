import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useAxios } from "../../hooks/use-axios";
import { useUserContext } from "../../Store/UserContext";
import ProfileCard from "./ProfileCard";
import ProjectsCard from "./ProjectsCard";

export default function Profile(props) {
  const { fetchData, response } = useAxios();
  const ctx = useUserContext();
  const { id = 1, userType = null } = ctx;
  console.log("response in profile ", response);

  useEffect(() => {
    let config = {
      method: "GET",
      headers: { accept: "*/*" },
      params: { ids: items.join(), apiKey },
    };
    if (userType === "Talent") {
      config.url = `/talents`;
      fetchData(config);
    } else if (userType === "Recruiter") {
      config.url = `/recruiters`;
      fetchData(config);
    }
  }, [fetchData, userType]);

  return (
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
  );
}
