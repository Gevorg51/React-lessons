import React from "react";
import { NavLink } from "react-router-dom";
import styles from './navBar.module.css'

let NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div>
                <NavLink to='./Profile' className={styles.item} activeClassName={styles.active}> Profile </NavLink>
            </div>
            <div>
                <NavLink to='./Menu' className={styles.item} activeClassName={styles.active}> Menu </NavLink>
            </div>
            <div>
                <NavLink to='./Users' className={styles.item} activeClassName={styles.active}> Users </NavLink>
            </div>
            <div>
                <NavLink to='./Messages' className={styles.item} activeClassName={styles.active}> Messages </NavLink>
            </div>
            <div>
                <NavLink to='./Posts' className={styles.item} activeClassName={styles.active}> Posts </NavLink>
            </div>
        </div>
    )
}

export default NavBar