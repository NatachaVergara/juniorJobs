// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
import { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button, Input } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
  const { isUser, setIsUser, userType, setUserType, setUserId, setUserData } =
    useUserContext();

  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;

  const navigate = useNavigate();
  const logoutHandler = () => {
    setIsUser(false);
    setUserType(null);
    setUserId(null);
    setUserData(null);
    navigate("/login");
  };

  return (
    <Navbar className={classes.navbar} sticky="top" color="secondary" dark>
      <NavItem>
        <NavbarBrand>Junior Jobs app</NavbarBrand>
      </NavItem>

      <NavItem>
        <Input
          placeholder="Search an open position"
          className={classes.searchInput}
          type="search"
        ></Input>
      </NavItem>

      <NavItem>
        <NavLink to="/">
          <Button color="primary">Home</Button>
        </NavLink>
        {isUser === true && (
          <NavLink to="/profile">
            <Button color="primary">Profile</Button>
          </NavLink>
        )}
        <NavLink to="/about">
          <Button className="m-1" color="primary">
            About us
          </Button>
        </NavLink>
        <NavLink to="/faq">
          <Button className="m-1" color="primary">
            Faqs
          </Button>
        </NavLink>
        {userType === "Recruiter" && (
          <NavLink to="/newjob">
            <Button className="m-1" color="info">
              Post a new job
            </Button>
          </NavLink>
        )}
        {isUser ? (
          <Button onClick={logoutHandler} color="warning">
            Logout
          </Button>
        ) : (
          <Fragment>
            <Button color="warning" onClick={() => navigate("/register")}>
              SignUp
            </Button>
            <Button color="warning" onClick={() => navigate("/login")}>
              LogIn
            </Button>
          </Fragment>
        )}
      </NavItem>
    </Navbar>
  );
};

export default MainNavigation;
