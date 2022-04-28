import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
  const { isUser, setIsUser, setUserType, setUserId, setUserData } =
    useUserContext();

  const navigate = useNavigate();
  const logoutHandler = () => {
    setIsUser(false);
    setUserType(null);
    setUserId(null);
    setUserData(null);   
    navigate("/login");
  };

  return (
    <Navbar className={classes.navbar} sticky="top" dark>
      <NavItem >
        <NavbarBrand className='ms-5'>Junior Jobs app</NavbarBrand>
      </NavItem>

      {/* <NavItem>
        <Input
          placeholder="Search an open position"
          className={classes.searchInput}
          type="search"
        ></Input>
      </NavItem> */}

      <NavItem>
        <NavLink to="/">
          <Button color="primary">Home</Button>
        </NavLink>
        {isUser === true ? (
          <NavLink to="/profile">
            <Button color="primary" className="m-1">Profile</Button>
          </NavLink>
        ) : null}
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
        {/* {userType === "Recruiter" & isUser ?
          <NavLink to="/newjob">
            <Button className="m-1" color="info">
              Post a new job
            </Button>
          </NavLink>
        : null} */}
        {isUser ? (
          <Button onClick={logoutHandler} color="danger">
            Logout
          </Button>
        ) : (
          <Fragment>
            <Button color="success" className="m-1 text-dark" onClick={() => navigate("/register")}>
              SignUp
            </Button>
            <Button color="success" className="m-1 text-dark" onClick={() => navigate("/login")}>
              LogIn
            </Button>
          </Fragment>
        )}
      </NavItem>
    </Navbar>
  );
};

export default MainNavigation;
