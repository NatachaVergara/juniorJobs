import { Fragment, useEffect, useState } from "react";
import { Card, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import classes from "./TalentProfileCard.module.scss";
import { BASE_URL } from "../../utils/URL";

export default function TalentProfileCard({ data, edu, exp, sp, sr }) {


  const [seniorities, setSeniorities] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  //const [remote, setRemote] = useState([]);
  const [speciality, setSpeciality] = useState([]);
  // const [skills, setSkills] = useState([]);



  // console.log("seniorities in new job form", seniorities);
  useEffect(() => {
    const fetchDataSeniorities = async () => {
      const response = await fetch(`${BASE_URL}/Seniorities/${sr}`);
      const data = await response.json();
      setSeniorities(data);
    };

    fetchDataSeniorities();
    const fetchDataEducation = async () => {
      const response = await fetch(`${BASE_URL}/education/${edu}`);
      const data = await response.json();
      setEducation(data);
    };
    fetchDataEducation();
    const fetchDataExperience = async () => {
      const response = await fetch(`${BASE_URL}/experience/${exp}`);
      const data = await response.json();
      setExperience(data);
    };
    fetchDataExperience();

    const fetchDatasetSpeciality = async () => {
      const response = await fetch(`${BASE_URL}/speciality/${sp}`);
      const data = await response.json();
      setSpeciality(data);
    };
    fetchDatasetSpeciality();



  }, [edu, exp, sp, sr]);


  return (
    <Fragment>
      <Card body
        height="100"
        inverse className={classes.card}>
        <CardImg
          src={data.image}>
        </CardImg>
        <CardTitle
          tag="h1"
          className='mt-3 text-dark m-5 text-center'>
          {data.name} {data.lastName}
        </CardTitle>
        <CardSubtitle className="mt-3 text-dark m-5 text-center" tag="h3">
          {data.profile}
        </CardSubtitle>

        <div className={classes.profile}>
          <CardText className={classes.cardText}>Date of birth : {data.birthdate} </CardText>
          <CardText className={classes.cardText}>Education : {education.name} </CardText>
          <CardText className={classes.cardText}>Speciality : {speciality.category} </CardText>
          <CardText className={classes.cardText}>Seniority: {seniorities.name} </CardText>
          <CardText className={classes.cardText}>Years of experience : {experience.period} </CardText>

          <CardText
            className={classes.cardText}>
            Email: {data.email}
          </CardText>
          <CardText>
            Phone number: {data.phone}
          </CardText>
        </div >
        <div className={classes.link}>
          <CardLink
            href={data.url}
            className={classes.cardLink}
            target="_blank"
            rel="noopener noreferrer"
          ><AiFillLinkedin />
          </CardLink>
          <CardLink

            href={data.repository}
            className={classes.cardLink}
            target="_blank"
            rel="noopener noreferrer"
          ><AiFillGithub />
          </CardLink>
        </div >
        {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
          FULL STACK
        </CardSubtitle> */}
        <CardText>
          {/* {data.skills[0].name} - {data.skills[0].level} */}
        </CardText>
      </Card>
    </Fragment>
  );
}
