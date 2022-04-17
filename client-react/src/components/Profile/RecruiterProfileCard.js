import { Fragment } from "react";
import { Card, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import classes from "./RecruiterProfileCard.module.scss";

export default function RecruiterProfileCard(props) {
 
  return (
    <Fragment>
      <Card body color="secondary" inverse className={classes.card}>
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
        <CardSubtitle className="mb-2 text-muted" tag="h5">
          Company name: {props.data.company}
        </CardSubtitle>
        <CardLink
          href={props.data.url}
          className='text-light text-decoration-none'
          target="_blank"
          rel="noopener noreferrer"
        >Company web Site - Linkedin: 
        <CardSubtitle className="mb-2" tag="h6">
        {props.data.url}
        </CardSubtitle>
        </CardLink>
        <CardText
          className='text-light m-0'>
          Email: {props.data.email}
        </CardText>
      

      </Card>
    </Fragment>
  );
}
