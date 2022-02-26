import React from "react";
import TextContainer from "./ProfileTextArea/TextContainer";
import ProfileInfo from "./ProfileInfo/profileInfo"

let Profile = (props) => {
    return (
        <div>
            <ProfileInfo props={props.profile}/>
            <TextContainer />
        </div>
    )


}

export default Profile