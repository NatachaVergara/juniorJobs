import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useAxios } from "../../hooks/use-axios";
import { useUserContext } from "../../Store/UserContext";
import ProfileCard from "./ProfileCard";
import ProjectsCard from "./ProjectsCard";

export default function Profile(props) {
  const { fetchData, response } = useAxios();
  const { id = 1, userType = null } = useUserContext();
  console.log("response in profile ", response);

  useEffect(() => {
    let config = {
      method: "GET",
      headers: { accept: "*/*" },
      params: { id },
    };
    if (userType === "Talent") {
      config.url = `/talents/${id}`;
      fetchData(config);
    } else if (userType === "Recruiter") {
      config.url = `/recruiters/${id}`;
      fetchData(config);
    }
  }, [fetchData, userType, id]);

  return (
    <Container>
      <Row>
        <Col>
          <ProfileCard data={response} />
        </Col>
        <Col lg="8">
          <ProjectsCard dta={response} />
        </Col>
      </Row>
    </Container>
  );
}
