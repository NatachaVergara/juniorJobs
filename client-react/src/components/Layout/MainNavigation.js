// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button } from "reactstrap";
import classes from "./MainNavigation.module.scss";
const MainNavigation = () => {
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  const isLoggedIn = true;
  const logoutHandler = () => {
    isLoggedIn = false;
  };
  return (
    <Navbar
      className={classes.navbar}
      expand="md"
      sticky="top"
      color="secondary"
      dark
    >
      <NavbarBrand href="/">Junior Jobs App</NavbarBrand>
      <NavItem>
        <NavLink to="/home">
          <Button color="info" >
            Home
          </Button>
        </NavLink>
        <NavLink to="/profile">
          <Button color="primary" >
            Profile
          </Button>
        </NavLink>
      {/* </NavItem>
      <NavItem> */}
        <NavLink to="/about-us">
          <Button color="primary" >
            About us
          </Button>
        </NavLink>
        <NavLink to="/faq">
          <Button color="primary" >
            Faqs
          </Button>
        </NavLink>
      </NavItem>
      {!isLoggedIn && (
        <NavItem>
          <Button color="warning">SignUp</Button>
          <Button color="warning">LogIn</Button>
        </NavItem>
      )}
      {isLoggedIn && (
        <NavItem>
          <Button onClick={logoutHandler} color="warning">
            Logout
          </Button>
        </NavItem>
      )}
    </Navbar>
  );
};

export default MainNavigation;
