//import { useEffect } from "react";
import { useUserContext } from "../../Store/UserContext";
//import { useAxios } from "../../hooks/use-axios";

import ProjectsCard from "./ProjectsCard";
import { Col, Container, Row } from "reactstrap";
import TalentProfileCard from "./TalentProfileCard";
import RecruiterProfileCard from "./RecruiterProfileCard";
export default function Profile(props) {
  const { userType, userData  } = useUserContext();
  //console.log("data in profile ", response.data);

  // useEffect(() => {
  //   if (id) {
  //     let config = {
  //       method: "GET",
  //       headers: { accept: "*/*" },
  //       params: { id },
  //     };
  //     if (userType === "Talent") {
  //       config.url = `/talents/${id}`;
  //       fetchData(config);
  //     } else if (userType === "Recruiter") {
  //       config.url = `/recruiters/${id}`;
  //       fetchData(config);
  //     }
  //   }
  // }, [fetchData, userType, id]);

  return (
    <Container>
      {userType === 'Talent' ? <Row>
        <Col>
          <TalentProfileCard data={userData}  />
        </Col>
        <Col lg="8">
          <ProjectsCard />
        </Col>
      </Row> : 
      <Row>
      <Col>
        <RecruiterProfileCard data={userData}  />
      </Col>
      <Col lg="8">
        <ProjectsCard />
      </Col>
    </Row>
      
      }


      
    </Container>
  );
}
