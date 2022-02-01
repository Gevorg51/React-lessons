import React from "react";
import styles from './posts.module.css'

let Posts = (props) => {

    let postsCount = Math.ceil(props.totalPostsCount / props.pagesSize);
    let pages = [];

    for (let i = 1; i <= postsCount; i++) {
        pages.push(i);
    };
    
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.active}
                        onClick={() => { props.onPageChage(p) }} >{p}</span>
                })}

            </div>

            {props.postsData.map(p => <div key={p.key}>
                <span>
                    <div className={styles.postsId}>
                        {p.id}
                    </div>
                </span>
                <span>
                    <div className={styles.postsTitle}>
                        {p.title}
                    </div>
                </span>
                <span>
                    <div className={styles.postsBody}>
                        {p.body}
                    </div>
                </span>

            </div>)}
        </div>
    )
}

export default Posts