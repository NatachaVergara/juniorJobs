import {TiSocialTwitter,  TiSocialLinkedin,  TiSocialInstagram,  TiSocialGithub} from "react-icons/ti";
import { Navbar, NavItem, NavLink } from "reactstrap";
import Brand from "../Brand/Brand";
import style from './Styles/Footer.module.scss'

export default function Footer(props) {
  return (
    <Navbar tag="footer" className={style.navbar}>
      <Brand classes={style.brand} />
      <div >
        <ul className={style.social}>
          <NavItem >
            <NavLink to="/">
              <TiSocialGithub />
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
          </NavItem>      
          <NavItem>
            <NavLink to="#">
              <TiSocialTwitter />
            </NavLink>
          </NavItem>
         
        </ul>
      </div>
    </Navbar>
  );
}
