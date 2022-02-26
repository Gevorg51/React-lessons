import React from "react";
import { NavLink } from "react-router-dom";
import styles from './users.module.css'

let Users = (props) => {

    return (
        <div>
            {props.users.map(u => <div key={u.key}>
                <span>
                    <div>
                        <NavLink to={'/Profile/*' + u.id}>
                            <img className={styles.avatar} src='https://www.kindpng.com/picc/m/24-244605_pink-guy-png-transparent-pink-guy-png-png.png' />
                        </NavLink>
                    </div>
                </span>

                <span>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>

                <span>
                    <div>{u.name}</div>
                    <div>{u.username}</div>
                </span>

                <span>
                    <div>{ }</div>
                    <div>{ }</div>
                </span>
            </div>)}
        </div>
    )
}


export default Users;