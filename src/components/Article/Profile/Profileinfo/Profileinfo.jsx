import React from 'react';
import C from './Profileinfo.module.css'
import Preloader from '../../../common/preloader/Preloader';
const ProfileInfo =(props) => {
    if(!props.profile){
        return(
            <Preloader />
        )
    }
    else{
    return (
        <article>
            <div><img src="https://storge.pic2.me/cm/2560x1440/951/58487259adcd0.jpg" alt="Loading..." className={C.background} />
            </div>
            <div>
                <img src={props.profile.photos.large } alt="" className={C.ava} />
                
                 desc</div>
        </article>
    )
}
}


export default ProfileInfo; 