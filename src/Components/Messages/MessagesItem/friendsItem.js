import React from 'react';
import { NavLink } from 'react-router-dom';

const friendsItem = (props) => {
    // const path = `/messages/${props.id}/`

    return (
        <div>
            <NavLink to={'/Messages/' + props.id} activeStyle={{color: 'green',}} >
                {props.name}
            </NavLink>;
        </div>
    )
}

    
export default friendsItem;