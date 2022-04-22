import { Fragment } from "react";
import { Card, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import classes from "./RecruiterProfileCard.module.scss";

export default function RecruiterProfileCard(props) {
 
  return (
    <Fragment>
      <Card inverse className={classes.card}>
        <CardImg
          src={props.data.image}
          className={classes.img}        
        >
        </CardImg>
        <div className={classes.profile}>
        <CardTitle
          tag="h1"
          className='mt-3'>
          {props.data.name} {props.data.lastName}
        </CardTitle>
        <CardSubtitle className={classes.text} tag="h5">
          Company name: {props.data.company}
        </CardSubtitle>
       
        <CardLink
          href={props.data.url}          
          target="_blank"
          rel="noopener noreferrer"
          className={classes.cardLink}
        >Company web Site - Linkedin: 
        <CardSubtitle className="mb-2" tag="h6">
        {props.data.url}
        </CardSubtitle>
        </CardLink>
        </div>
        <CardText
          className='text-light m-0'>
          Email: {props.data.email}
        </CardText>
      </Card>
    </Fragment>
  );
}
