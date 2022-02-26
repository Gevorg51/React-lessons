import React from 'react';
import styles from './profile.module.css'

let ProfileInfo = (props) => {
    if (!props.profile) {
        return 
        // тут должен быть ПРЕ-ЛОАДЕР
    }

    return (
        <div>
            {/* <div>
               <img className={styles.avatar} src='https://64.media.tumblr.com/36d77f61ef18bbe9ce64a1995b90e69f/1812e05d22fb3986-f6/s250x400/b4f394d6e3783632ba7d4022792ba76542a07cbb.png' alt='avatar' />
            </div> */}

            <div>
                <img src={props.profile.photos.large} alt='avatar' />
            </div>

            <div className={styles.profileName}>
                <h2>Gev</h2>
            </div>
        </div>
    )
}

export default ProfileInfo;