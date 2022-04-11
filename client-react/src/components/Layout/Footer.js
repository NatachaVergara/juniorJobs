import {
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialSkypeOutline,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";
import { Navbar, NavItem, NavLink } from "reactstrap";

export default function Footer(props) {
  return (
    <Navbar tag="footer" className="mt-auto bg-secondary text-light h-100">
      <NavItem>Developed by JJ team</NavItem>
      <NavItem>
        <NavLink to="/">
          <TiSocialGithub size="2em"  color="white" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <TiSocialInstagram size="1.5em" color="white" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <TiSocialLinkedin size="1.5em" color="white" />
        </NavLink>
      </NavItem>{" "}
      <NavItem>
        <NavLink to="#">
          <TiSocialSkypeOutline size="1.5em" color="white" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <TiSocialTwitter size="1.5em" color="white" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <TiSocialYoutube size="1.5em" color="white" />
        </NavLink>
      </NavItem>
    </Navbar>
  );
}
