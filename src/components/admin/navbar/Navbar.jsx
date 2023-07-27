import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = ({ user }) => {

    return (
        <div className="adminNav">
            <div className="amin__toper">
                <Link to='/'>
                <img width='80' src={logo} alt="" />
                </Link>
                <div className="navbar__name">
                    Ваше имя:
                    <b>{user.username}</b>
                </div>
            </div>
            <div className="adin__navbar__links">
                {
                    user.id === 1 ?
                        <NavLink to='/admin/news'>
                            News
                        </NavLink>
                        :
                        null
                }
                <NavLink >
                    Advice
                </NavLink>
            </div>

        </div>
    )
}
