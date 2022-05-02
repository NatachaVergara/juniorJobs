import { Fragment } from "react";
import { Card, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import classes from "./RecruiterProfileCard.module.scss";
import { AiFillLinkedin } from 'react-icons/ai';
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
            tag="h2"
            className='m-5'>
            {props.data.name} {props.data.lastName}
          </CardTitle>
          <CardSubtitle 
          className={classes.cardText} 
          tag="h5">            
            Company name: {props.data.company}
          </CardSubtitle>         
          <CardText
          className={classes.cardText}>
          Email: {props.data.email}
        </CardText>
        <CardLink
            href={props.data.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <AiFillLinkedin  />
          </CardLink>
        </div>
        
      </Card>
    </Fragment>
  );
}
