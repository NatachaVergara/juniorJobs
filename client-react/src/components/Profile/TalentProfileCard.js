import { Fragment, useEffect, useState } from "react";
import { Card, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import classes from "./TalentProfileCard.module.scss";

export default function TalentProfileCard(props) {


  // const [seniorities, setSeniorities] = useState([]);
  // const [education, setEducation] = useState([]);
  // const [experience, setExperience] = useState([]);
  // const [remote, setRemote] = useState([]);
  // const [speciality, setSpeciality] = useState([]);
  // const [skills, setSkills] = useState([]);

  

  // console.log("seniorities in new job form", seniorities);
  // useEffect(() => {
  //   const fetchDataSeniorities = async () => {
  //     const response = await fetch("http://localhost:3002/Seniorities");
  //     const data = await response.json();
  //     setSeniorities(data);
  //   };
  //   fetchDataSeniorities();
  //   const fetchDataEducation = async () => {
  //     const response = await fetch("http://localhost:3002/education");
  //     const data = await response.json();
  //     setEducation(data);
  //   };
  //   fetchDataEducation();
  //   const fetchDataExperience = async () => {
  //     const response = await fetch("http://localhost:3002/experience");
  //     const data = await response.json();
  //     setExperience(data);
  //   };
  //   fetchDataExperience();

  //   const fetchDatasetSpeciality = async () => {
  //     const response = await fetch("http://localhost:3002/speciality");
  //     const data = await response.json();
  //     setSpeciality(data);
  //   };
  //   fetchDatasetSpeciality();



  // }, []);

// console.log(`experience : ${experience}`)
// console.log(`seniorities ${seniorities}`)
// console.log(`education: ${education}`)
// console.log(`remote: ${remote}`)
// console.log(`speciality : ${speciality}`)
// console.log(`skills`)









  const education = props.data.id_Education;
  const EDUCATION = {
    1: "Bootcamp",
    2: "Course",
    3: "Engineering",
    4: "Bachelor's Degree",
    5: "Technician"
  }

  const seniority = props.data.id_Seniority;
  const SENIORITY = {
    1: "Junior",
    2: "Trainee"
  }

  const speciality = props.data.id_Speciality;
  const SPECIALITY = {
    1: "Backend",
    2: "Data Analytics",
    3: "Data Scientist"
  }

  const experience = props.data.id_Experience
  const EXPERIENCE = {
    1: "0 to 2 months",
    2: "2 to 6 months",
    3: "6 to 12 months",
    4: "1 to 2 years"
  }

  console.log(props.data)
  return (
    <Fragment>
      <Card body
        height="100"
        inverse className={classes.card}>
        <CardImg
          src={props.data.image}>
        </CardImg>
        <CardTitle
          tag="h1"
          className='mt-3 text-dark m-5 text-center'>
          {props.data.name} {props.data.lastName}
        </CardTitle>
        <CardSubtitle className="mt-3 text-dark m-5 text-center" tag="h3">
          {props.data.profile}
        </CardSubtitle>
        {console.log(props.data)}
        <div className={classes.profile}>
        <CardText className={classes.cardText}>Date of birth : {props.data.birthdate} </CardText>
        <CardText className={classes.cardText}>Education : {EDUCATION[education]} </CardText>
        {/* <CardText className={classes.cardText}>Speciality : {SPECIALITY[speciality]} </CardText> */}
        <CardText className={classes.cardText}>Seniority : {SENIORITY[seniority]} </CardText>
        <CardText className={classes.cardText}>Years of experience : {EXPERIENCE[experience]} </CardText>
              
        <CardText
          className={classes.cardText}>
          Email: {props.data.email}
        </CardText>
        <CardText>
          Phone number: {props.data.phone}
        </CardText>
        </div > 
       <div className={classes.link}>
        <CardLink
          href={props.data.url}
          className={classes.cardLink}
          target="_blank"
          rel="noopener noreferrer"
        ><AiFillLinkedin/>
        </CardLink>
        <CardLink
        
          href={props.data.repository}
          className={classes.cardLink}
          target="_blank"
          rel="noopener noreferrer"
        ><AiFillGithub/>
        </CardLink>
        </div > 
        {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
          FULL STACK
        </CardSubtitle> */}
        <CardText>
          {/* {props.data.skills[0].name} - {props.data.skills[0].level} */}
        </CardText>
      </Card>
    </Fragment>
  );
}
