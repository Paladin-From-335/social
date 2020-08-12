import React from 'react';
import C from './Profileinfo.module.css'
class ProfileInfo extends React.Component {
    render(){
    return (
        <article>
            <div><img src="https://storge.pic2.me/cm/2560x1440/951/58487259adcd0.jpg" alt="Loading..." className={C.background} />
            </div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/200px-Cat03.jpg" alt="" className={C.ava} /> desc</div>
        </article>
    )
}
}

export default ProfileInfo; 