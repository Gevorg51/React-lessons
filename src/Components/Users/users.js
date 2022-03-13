import React from "react";
import { NavLink } from "react-router-dom";
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import Preloader from '../common/preLoader/Preloader';

let Users = (props) => {
    if (!props.users) {
        <Preloader />
    }
    return (
        <div>
            {props.users.map(u => <div key={u.key}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}>
                            <img className={styles.avatar} src={u.photos.large != null ? u.photos.large : userPhoto} alt='avatar'/>
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
                    <div>{u.id}</div>
                </span>

            </div>)}
        </div>
    )
}


export default Users;