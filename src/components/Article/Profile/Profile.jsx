import React from 'react';
import C from './Profile.module.css'
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {


    return (
        <article>
            <div className={C.indent}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer />
            </div>
        </article>
    )
}


export default Profile;

