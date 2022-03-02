import React from 'react';
import styles from './profile.module.css';
import Preloader from '../../common/preLoader/Preloader'

let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
               <img  src='https://64.media.tumblr.com/36d77f61ef18bbe9ce64a1995b90e69f/1812e05d22fb3986-f6/s250x400/b4f394d6e3783632ba7d4022792ba76542a07cbb.png' alt='avatar' />
            </div> */}

            <div>
                <img className={styles.avatar} src={props.profile.photos.small} alt='avatar' />
            </div>

            <div>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>

            <div className={styles.profileName}>
                <h2>Gev</h2>
            </div>
        </div>
    )
}

export default ProfileInfo;