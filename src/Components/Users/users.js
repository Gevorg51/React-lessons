import React from "react";
import { NavLink } from "react-router-dom";
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import Preloader from '../common/preLoader/Preloader';
import * as axios from "axios";

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
                            ? <button onClick={() => {                                
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API_KEY': '74c4e112-d900-4aee-8d2f-ceb205c3bc5f'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id);
                                    }
                                })

                            }}>Unfollow</button>

                            : <button onClick={() => {
                                
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API_KEY': '74c4e112-d900-4aee-8d2f-ceb205c3bc5f'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                })

                            }}>Follow</button>}
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