import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import RegisterRecruiter from "../components/Register/RegisterRecruiter";
import RegisterTalent from "../components/Register/RegisterTalent";

export default function ProfilePage() {
  return (
    <Fragment>
      {!false && <RegisterTalent></RegisterTalent>}
      {true && <RegisterRecruiter></RegisterRecruiter>}
    </Fragment>
  );
}
