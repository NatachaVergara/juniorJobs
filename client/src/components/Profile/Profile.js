import { Fragment, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";
import RecruiterProjectsCard from "./Recruiter/RecruiterProjectsCard";
import RecruiterProfileCard from "./Recruiter/RecruiterProfileCard";
import RecruiterUpdateForm from "./Recruiter/RecruiterUpdateForm";
import TalentProfileCard from "./Talent/TalentProfileCard";
import TalentUpdateForm from "./Talent/TalentUpdateForm";
import TalentProyectsCard from "./Talent/TalentProyectsCard";




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
          <TalentProfileCard 
          data={userData}
          edu={userData.id_Education}
          exp={userData.id_Experience}
          sr={userData.id_Seniority}
          sp={userData.id_Speciality}
          
          />
          <TalentProyectsCard />
        </div>
        :
        <div className="d-flex flex-column  flex-md-row">
          <RecruiterProfileCard data={userData}/>
          <RecruiterProjectsCard  />
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
                      className='m-5 btn btn-success'
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
                      className='m-5 btn btn-danger'
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
