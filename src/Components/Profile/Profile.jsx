import React from 'react';
import MyPostsContainer from './MyPost/MyPostContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile;