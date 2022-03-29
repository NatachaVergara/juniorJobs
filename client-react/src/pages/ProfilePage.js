import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Profile from "../components/Register/Profile";
import RegisterRecruiter from "../components/Register/RegisterRecruiter";
import RegisterTalent from "../components/Register/RegisterTalent";

export default function ProfilePage() {
  return (
    <Fragment>
      <Profile></Profile>
      {/* editing and first login */}
      {!true && <RegisterTalent></RegisterTalent>}
      {!true && <RegisterRecruiter></RegisterRecruiter>}
    </Fragment>
  );
}
