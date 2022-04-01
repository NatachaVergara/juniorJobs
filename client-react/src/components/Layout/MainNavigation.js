// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button, Input, Label } from "reactstrap";
import classes from "./MainNavigation.module.scss";
const MainNavigation = () => {
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  const isLoggedIn = true;
  const logoutHandler = () => {
    isLoggedIn = false;
  };
  return (
    <Navbar className={classes.navbar} sticky="top" color="secondary" dark>
      
      <NavItem>
        <NavbarBrand href="/">Junior Jobs App</NavbarBrand>
      </NavItem>

      <NavItem>
        <Input
          placeholder="Search an open position"
          className={classes.searchInput}
          type="search"
        ></Input>
      </NavItem>

      <NavItem>
        <NavLink to="/home">
          <Button color="primary">Home</Button>
        </NavLink>
        <NavLink to="/profile">
          <Button color="primary">Profile</Button>
        </NavLink>
        <NavLink to="/about">
          <Button color="primary">About us</Button>
        </NavLink>
        <NavLink to="/faq">
          <Button color="primary">Faqs</Button>
        </NavLink>
        {!isLoggedIn ? (
          <Fragment>
            <Button color="warning">SignUp</Button>
            <Button color="warning">LogIn</Button>
          </Fragment>
        ) : (
          <Button onClick={logoutHandler} color="warning">
            Logout
          </Button>
        )}
      </NavItem>
    </Navbar>
  );
};

export default MainNavigation;
