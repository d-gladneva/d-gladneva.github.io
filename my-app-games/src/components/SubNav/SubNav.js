import React from 'react';
import s from './SubNav.module.css';

const SubNav = () => {

    return (
        <div className={s.subnavWrap}>
        <div className={s.subnav}>
            <div>
                <span>
                    Home
               </span>
                <span>
                    >
                </span>
                <span>
                    Discover
                </span>
                <span>
                    >
                </span>
                <span>
                    Games
                </span>
            </div>
        </div>
        </div>
    )
};

export default SubNav;