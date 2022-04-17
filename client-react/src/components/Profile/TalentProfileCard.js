import { Fragment } from "react";
import { Card, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import classes from "./TalentProfileCard.module.scss";

export default function TalentProfileCard(props) {
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
        <CardText>Date of birth {props.data.birthdate} </CardText>
        <CardText>Education {props.data.id_Education} </CardText>
        <CardText>Seniority {props.data.id_Seniority} </CardText>
        <CardText>Years of experience {props.data.id_Experience} </CardText>
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
