import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useAxios } from "../../hooks/use-axios";
import { useUserContext } from "../../Store/UserContext";
import ProfileCard from "./ProfileCard";
import ProjectsCard from "./ProjectsCard";

export default function Profile(props) {
  const { fetchData, response } = useAxios();
  const { userType = null } = useUserContext();
  console.log("response in profile ", response);

  useEffect(() => {
    let config = {
      method: "GET",
      headers: { accept: "*/*" },
      params:  13 ,
    };
    if (userType === "Talent") {
      config.url = `/talents/13`;
      fetchData(config);
    } else if (userType === "Recruiter") {
      config.url = `/recruiters/13`;
      fetchData(config);
    }
  }, [fetchData, userType]);

  return (
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
  );
}
