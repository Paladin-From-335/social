import React from 'react';
import C from './Profile.module.css'
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

class Profile extends React.Component {

render(){  
    return (
        <article>
            <div className={C.indent}>
                <ProfileInfo />
                <MyPostsContainer />
            </div>
        </article>
    )
}
}

export default Profile; 

