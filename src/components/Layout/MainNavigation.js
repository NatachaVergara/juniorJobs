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
import Brand from "../Brand/Brand";


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
     <Brand classes={classes.brand}/>


      <Nav className={classes.nav} >
        <NavItem>
          <NavLink to="/">
            <Button color="dark">
              <img src={home} alt='home' className={classes.img} title='HOME' />
            </Button>
          </NavLink>
        </NavItem >

        {isUser === true ? (
          <NavItem>
            <NavLink to="/profile">
              <Button color="dark">

                <img src={userData?.image} alt='userProfileIMG' className={classes.img}  title='PROFILE'/>
              </Button>
            </NavLink>
          </NavItem>

        ) : null}
        <NavItem>
          <NavLink to="/about">
            <Button color="dark">
              <img src={aboutUs} alt='aboutUsImage' className={classes.img} title='ABOUT US' />
            </Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/faq">
            <Button color="dark">
              <img src={fqa} alt='fqa' className={classes.img} title='FQA' />
            </Button>
          </NavLink>
        </NavItem>
        {isUser ? (
          <NavItem>
            <Button onClick={logoutHandler} color="danger" >
              <img src={logout} alt='login' className={classes.img} title='LOGOUT' />
            </Button>
          </NavItem>
        ) : (
          <Fragment>
            <NavItem>
              <Button color="dark" className="text-dark" onClick={() => navigate("/register")}>
                <img src={register} alt='login' className={classes.img} title='REGISTER'/>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="dark" className="text-dark" onClick={() => navigate("/login")}>
                <img src={login} alt='login' className={classes.img} title='LOGIN'/>
              </Button>
            </NavItem>
          </Fragment>
        )}

      </Nav>

    </Navbar>
  );
};

export default MainNavigation;
