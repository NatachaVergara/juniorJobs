import { Fragment } from "react";
import {
  Button,
  Card,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import classes from "./ProfileCard.module.scss";

export default function ProfileCard(props) {
  return (
    <Fragment>
      <Card body color="dark" inverse className={classes.card}>
        <CardImg
          src="https://media.istockphoto.com/photos/young-character-actor-headshot-picture-id1211061995?k=20&m=1211061995&s=170667a&w=0&h=KtUBCp33OpGS9VfQ35IIJB8jF7aC1r7tMhI_Rqlxh5I="
          width="100%"
          top
        ></CardImg>
        <CardTitle tag="h5">Pepe el programador</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          About me
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Contactos
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Tech stack
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
          <div>
            <Button onClick={props.onDelete} color="warning">DELETE</Button>
            <Button onClick={props.onEdit} color="danger">EDIT</Button>
          </div>
      </Card>
    </Fragment>
  );
}
