import { Fragment, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";
import RecruiterProjectsCard from "./RecruiterProjectsCard";
import RecruiterProfileCard from "./RecruiterProfileCard";
import RecruiterUpdateForm from "./RecruiterUpdateForm";
import TalentProfileCard from "./TalentProfileCard";
import TalentUpdateForm from "./TalentUpdateForm";
import TalentProyectsCard from "./TalentProyectsCard";




const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { userType, userData } = useUserContext();



  const onEdit = () => {
    setIsEditing(true);

  };
  const onCancelEdit = () => {
    setIsEditing(false);
  }


  


  return (
    <>
      {userType === 'Talent' ?
        <div className="d-flex flex-column flex-md-row">
          <TalentProfileCard data={userData} />
          <TalentProyectsCard />
        </div>
        :
        <div className="d-flex flex-column  flex-md-row">
          <RecruiterProfileCard data={userData}/>
          <RecruiterProjectsCard />
        </div>
      }

      <Fragment>
        <Container>
          <Row>
            <Col>
              {
                !isEditing ?
                  <>
                    <Button
                      onClick={onEdit}
                      color="danger"
                      className='m-5'
                      type="submit">
                      Edit Profile
                    </Button>
                  </>
                  :
                  <>
                    <Button
                      onClick={onCancelEdit}
                      color="primary"
                      type="submit"
                      className='m-5'
                    >
                      Cancel Edit
                    </Button>
                  </>
              }
            </Col>


            {isEditing & userType === "Talent" ? (
              <Row className='d-flex flex-column flex-md-row'>
                <TalentUpdateForm
                  data={userData}
                  setIsEditing={setIsEditing}
                >
                </TalentUpdateForm>
              </Row>
            ) : null}
            {isEditing & userType === "Recruiter" ? (
              <Row className='d-flex flex-column flex-md-row'>
                <RecruiterUpdateForm
                  data={userData}
                  setIsEditing={setIsEditing}
                >
                </RecruiterUpdateForm>
              </Row>
            ): null}
          </Row>
        </Container>
      </Fragment>
    </>
  )

}

export default Profile;
