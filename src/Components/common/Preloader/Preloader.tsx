import React from 'react';
import preloader from "../../../assets/svg/preloader.svg";

export const Preloader = () => {
    return (
        <div>
            <img style={{width: '70px', height: '70px'}} src={preloader} alt={'preloader'}/>
        </div>
    );
};

