import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button } from "reactstrap";
// import AuthContext from "../../store/auth-context";
import classes from './MainNavigation.module.scss'
const MainNavigation = () => {
  // const authCtx = useContext(AuthContext);

  // const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    // authCtx.logout();
    // optional: redirect the user
  };

  return (
      <Navbar className={classes.navbar}  expand="md" sticky="top" dark>
        <NavbarBrand href="/">Junior Jobs App</NavbarBrand>
        {/* { isLoggedIn && (
          <NavItem>
            <Link to='/home'><Button color="primary">Menu</Button></Link>
            <Button onClick={logoutHandler}>Logout</Button>
          </NavItem>
        )} */}
      </Navbar>
  );
};

export default MainNavigation;

