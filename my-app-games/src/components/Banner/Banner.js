import React from 'react';
import s from './Banner.module.css';
import BannerInfo from "../BannerInfo/BannerInfo";

const Banner = () => {

    return (
        <div className={s.bannerWrap}>
            <h1 className={s.bannerTitle}>Games</h1>
            <div className={s.banner}>
                <BannerInfo/>
            </div>
        </div>
    )
};

export default Banner;