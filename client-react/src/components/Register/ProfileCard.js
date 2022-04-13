import { Fragment } from "react";
import { Card, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import classes from "./ProfileCard.module.scss";

export default function ProfileCard(props) {
  console.log(props.data)
  return (
    <Fragment>
      <Card body color="secondary" inverse className={classes.card}>
        <CardImg
          src={props.data.image}
          width="100%"
          top
        ></CardImg>
        <CardTitle tag="h5">{props.data.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.data.profile}
        </CardSubtitle>
        <CardText>{`Visit my page ${props.data.url}`}</CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.data.repository}
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          TECH STACK
        </CardSubtitle>
        <CardText>
          {/* {props.data.skills[0].name} - {props.data.skills[0].level} */}
        </CardText>
      </Card>
    </Fragment>
  );
}
