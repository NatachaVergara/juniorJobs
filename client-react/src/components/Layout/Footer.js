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
    <Navbar tag="footer" className="mt-auto bg-secondary text-light ">
      <NavItem>Development of JJ team</NavItem>
      <NavItem>
        <NavLink to="/">
          <span>
            <TiSocialGithub />
          </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <TiSocialInstagram />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <TiSocialLinkedin />
        </NavLink>
      </NavItem>{" "}
      <NavItem>
        <NavLink to="#">
          <TiSocialSkypeOutline />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <TiSocialTwitter />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">
          <TiSocialYoutube />
        </NavLink>
      </NavItem>
    </Navbar>
  );
}
