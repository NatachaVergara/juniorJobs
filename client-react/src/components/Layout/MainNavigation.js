// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
import { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button, Input } from "reactstrap";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;

  let ls = JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();
  const logoutHandler = () => {
    alert("adios");
    localStorage.setItem("isLogin", false);
    navigate("/login");
  };

  return (
    <Navbar className={classes.navbar} sticky="top" color="secondary" dark>
      <NavItem>
        <h2 className="text-light">Junior jobs</h2>
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
          <Button className="m-2" color="primary">Home</Button>
        </NavLink>
        {ls === true && (
          <NavLink to="/profile">
            <Button color="primary">Profile</Button>
          </NavLink>
        )}
        <NavLink to="/about">
          <Button className="m-1"  color="primary">About us</Button>
        </NavLink>
        <NavLink to="/faq">
          <Button className="m-1"  color="primary">Faqs</Button>
        </NavLink>
        {ls === true ? (
          <Button className="m-1"  onClick={logoutHandler} color="warning">
            Logout
          </Button>
        ) : (
          <Fragment>
            <Button  className="m-1" color="warning" onClick={() => navigate("/register")}>
              SignUp
            </Button>
            <Button className="m-1"  color="warning" onClick={() => navigate("/login")}>
              LogIn
            </Button>
          </Fragment>
        )}
      </NavItem>
    </Navbar>
  );
};

export default MainNavigation;
