import { Fragment } from "react";
import { Card, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import classes from "./TalentProfileCard.module.scss";

export default function TalentProfileCard(props) {
  const education = props.data.id_Education;
  const EDUCATION = {
    1 : "Bootcamp",
    2 : "Course",
    3 : "Engineering",
    4 : "Bachelor's Degree",
    5 : "Technician"
  }

  const seniority = props.data.id_Seniority;
  const SENIORITY = {
    1 : "Junior",
    2 : "Trainee"
  }

  const speciality = props.data.id_Speciality;
  const SPECIALITY = {
    1 : "Backend",
    2 : "Data Analytics",
    3 : "Data Scientist"
  }
  // console.log(props.data)
  return (
    <Fragment>
      <Card body color="secondary" height="100" inverse className={classes.card}>
        <CardImg
          src={props.data.image}
          width="100%"
          top
        >
        </CardImg>
        <CardTitle
          tag="h1"
          className='mt-3'>
          {props.data.name} {props.data.lastName}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h3">
          {props.data.profile}
        </CardSubtitle>
    {console.log(props.data)}
        <CardText>Date of birth : {props.data.birthdate} </CardText>
        <CardText>Education : {EDUCATION[education]} </CardText>
        <CardText>Speciality : {SPECIALITY[speciality]} </CardText>
        <CardText>Seniority : {SENIORITY[seniority]} </CardText>
        <CardText>Years of experience : {props.data.id_Experience} </CardText>
        <CardText 
        className='text-light m-0'>
          Email: {props.data.email}
        </CardText>
        <CardText>
          Phone number: {props.data.phone}
        </CardText>         
        <CardLink
          href={props.data.url}
          className='text-light text-decoration-none'
          target="_blank"
          rel="noopener noreferrer"
        >Visit my linkedin
        </CardLink>
        <CardLink
          href={props.data.repository}
          className='text-light m-0 text-decoration-none'
          target="_blank"
          rel="noopener noreferrer"
        >Visit my repository
        </CardLink>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          FULL STACK
        </CardSubtitle>
        <CardText>
          {/* {props.data.skills[0].name} - {props.data.skills[0].level} */}
        </CardText>
      </Card>
    </Fragment>
  );
}
