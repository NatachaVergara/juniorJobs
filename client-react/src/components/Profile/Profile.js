import { Fragment, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";

import { useAxios } from "../../hooks/use-axios";
import { useUserContext } from "../../Store/UserContext";
import ProjectsCard from "./ProjectsCard";
import RecruiterProfileCard from "./RecruiterProfileCard";
import RecruiterUpdateForm from "./RecruiterUpdateForm";
import TalentProfileCard from "./TalentProfileCard";
import TalentUpdateForm from "./TalentUpdateForm";





const Profile = () =>{
    const [isEditing, setIsEditing] = useState(false);
    const { userID, userType, userData } = useUserContext();
    const { fetchData } = useAxios();


    const onEdit = () => {       
          setIsEditing(true);

        };
    const onCancelEdit = () => {
      setIsEditing(false);
    }

  function onSubmitHandler(values) {
        let params = {}

        if (userType === "Talent") {
          params.method = 'put'
          params.url = `/talents/${userID}`;
          params.header = {'Content-type': 'application/x-www-form-urlencoded'};
          params.data =  values

        } else if (userType === "Recruiter") {
          params.method = 'put'
          params.url = `/recruiters/${userID}`;
          params.header = {'Content-type': 'application/x-www-form-urlencoded'};
          params.data =  values
        }

        fetchData(params);
      }


  return (
    <>
      {userType === 'Talent' ?  
          <div className="d-flex flex-column flex-md-row">
            <TalentProfileCard data={userData}/>
            <ProjectsCard/>
          </div>
      : 
          <div className="d-flex flex-column flex-md-row ">
            <RecruiterProfileCard data={userData}
            onSubmit={onSubmitHandler}
            />   
            <ProjectsCard/>
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


          {isEditing & (userType === "Talent") && (
            <Row>
              <TalentUpdateForm
                onSubmit={onSubmitHandler}
                data={userData}
                setIsEditing={setIsEditing}
                 >
                  
              </TalentUpdateForm>
            </Row>
          )}
          {isEditing & (userType === "Recruiter") && (
            <Row>
              <RecruiterUpdateForm
                onSubmit={onSubmitHandler}
                data={userData}
                setIsEditing={setIsEditing}
                >
                
              </RecruiterUpdateForm>
            </Row>
          )}
        </Row>
      </Container>
    </Fragment>
    </>
  )

}

export default Profile;
