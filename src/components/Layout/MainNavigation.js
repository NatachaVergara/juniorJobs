import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Button, Nav } from "reactstrap";
import { useUserContext } from "../../Store/UserContext";

import classes from "./MainNavigation.module.scss";
import aboutUs from '../../Img/aboutUS32px.png'
import home from '../../Img/home32px.png'
import fqa from '../../Img/fqa.png'
import login from '../../Img/login.png'
import logout from '../../Img/logout.png'
import register from '../../Img/register.png'


const MainNavigation = () => {
  const { isUser, setIsUser, setUserType, setUserId, setUserData, userData } =
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
        <NavbarBrand >JUNIOR JOBS</NavbarBrand>
      </NavItem>


      <Nav className={classes.nav} >
        <NavItem>
          <NavLink to="/">
            <Button color="primary">
              <img src={home} alt='home'  className={classes.img} />
            </Button>
          </NavLink>
        </NavItem >

        {isUser === true ? (
          <NavItem>
            <NavLink to="/profile">
              <Button color="primary">
                
                <img src={userData?.image} alt='userProfileIMG' className={classes.img} />
              </Button>
            </NavLink>
          </NavItem>

        ) : null}
        <NavItem>
          <NavLink to="/about">
            <Button color="primary">
              <img src={aboutUs} alt='aboutUsImage'  className={classes.img} />
            </Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/faq">
            <Button color="primary">             
              <img src={fqa} alt='fqa'className={classes.img} />
            </Button>
          </NavLink>
        </NavItem>
        {isUser ? (
          <NavItem>
             <Button onClick={logoutHandler} color="danger" >
            <img src={logout} alt='login' className={classes.img}  />
          </Button>
          </NavItem>
        ) : (
          <Fragment>
            <NavItem>
              <Button color="success" className="text-dark" onClick={() => navigate("/register")}>
                <img src={register} alt='login' className={classes.img}/>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="success" className="text-dark" onClick={() => navigate("/login")}>
              <img src={login} alt='login' className={classes.img}/>
              </Button>
            </NavItem>
          </Fragment>
        )}

      </Nav>

    </Navbar>
  );
};

export default MainNavigation;
