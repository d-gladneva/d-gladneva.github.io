import React from 'react';
import s from './Location.module.css';

const Location = () => {

    return (
        <div className={s.modal}>
            <div className={s.wrapper}>
                <div className={s.location}>
                    <img className={s.locImg} src={require(`../../imgs/pin.svg`)}/>
                    <span>Dublin, Republic of Ireland</span>
                </div>
                <div>
                    <img className={s.locImg} src={require(`../../imgs/logo.svg`)}/>
                </div>
                <div className={s.iconBox}>
                    <img className={s.iconImg1} src={require(`../../imgs/icon1.svg`)}/>
                    <img className={s.iconImg2} src={require(`../../imgs/icon2.svg`)}/>
                    <img className={s.iconImg3} src={require(`../../imgs/icon3.svg`)}/>
                </div>
            </div>
        </div>
    )
};

export default Location;