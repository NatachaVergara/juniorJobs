import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button, Nav } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";
import { BiLogOut } from "react-icons/bi";
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
      <NavItem className={classes.brand}>
        <NavbarBrand >Junior Jobs app</NavbarBrand>
      </NavItem>

     
        <Nav className={classes.nav} >
          <NavItem>
            <NavLink to="/">
              <Button color="primary">HOME</Button>
            </NavLink>
          </NavItem >

          {isUser === true ? (
            <NavItem> <NavLink to="/profile">
              <Button color="primary" >PROFILE</Button>
            </NavLink>
            </NavItem>

          ) : null}
          <NavItem>
            <NavLink to="/about">
              <Button color="primary">
                ABOUT US
              </Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/faq">
              <Button color="primary">
                FAQ
              </Button>
            </NavLink>
          </NavItem>
          {isUser ? (
            <NavItem> <Button onClick={logoutHandler} color="danger">
             <BiLogOut/>
            </Button>
            </NavItem>
          ) : (
            <Fragment>
              <NavItem>
                <Button color="success" className="text-dark" onClick={() => navigate("/register")}>
                  SIGN UP
                </Button>
              </NavItem>
              <NavItem>
                <Button color="success" className="text-dark" onClick={() => navigate("/login")}>
                  LOG IN
                </Button>
              </NavItem>
            </Fragment>
          )}

        </Nav>  

    </Navbar>
  );
};

export default MainNavigation;
