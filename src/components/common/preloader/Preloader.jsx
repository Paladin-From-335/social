import React from 'react';
import Loader from './Loader/Loader';
// import preloader from './../../../assets/pictures/preloader.svg';

let Preloader = (props) => {
    return(
        <span>
        {/* <img src={preloader}/> */}
<Loader />
        </span>
    )
}
export default Preloader;