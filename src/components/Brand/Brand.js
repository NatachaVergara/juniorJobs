import React from 'react'
import { Link } from 'react-router-dom'
import {  NavItem } from 'reactstrap'

const Brand = ({classes}) => {
    return (
        <NavItem >
            <Link  className={classes} to='home' title='Go back home'>JUNIOR JOBS</Link>
        </NavItem>
    )
}

export default Brand