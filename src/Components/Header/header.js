import React from "react";
import { NavLink } from "react-browser-router";
import styles from './header.module.css'

let Header = (props) => {
    return(
        <div className={styles.header}>
            <header>
                <img className={styles.logo} src='https://i.pinimg.com/736x/49/a7/24/49a7247bc0f530e1d427f6dab3c32cf0.jpg' alt='logo'/>
            </header>

            <div className={styles.loginBlock}>
                <NavLink to={'/login'}>LOGIN</NavLink>
            </div>
        </div>
    )
}

export default Header