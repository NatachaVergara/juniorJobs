import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useAxios } from "../../hooks/use-axios";
import { useUserContext } from "../../Store/UserContext";
import ProfileCard from "./ProfileCard";
import ProjectsCard from "./ProjectsCard";

export default function Profile(props) {
  const {
    fetchData,
    response = {
      data: {
        name: "Leo alvez",
        profile: "ninjavascript coder motherfucker",
        skills: [{ name: "React", level: "beginner" }],
        repository: "linkedin.com",
        url: "github.com",
      },
    },
  } = useAxios();
  const { id = 13, userType = null } = useUserContext();
  console.log("data in profile ", response.data);

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
          <ProfileCard data={response.data} />
        </Col>
        <Col lg="8">
          <ProjectsCard dta={response.data} />
        </Col>
      </Row>
    </Container>
  );
}
