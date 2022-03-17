import React from 'react';
import s from './BannerInfo.module.css';

const BannerInfo = () => {

    return (
            <div className={s.headerInfo}>
                <h1 className={s.headerTitle}>Refer a friends and get $10 off!</h1>
                <p className={s.headerText}>Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27.</p>
                <button className={s.headerButton}>Invite a friend</button>
            </div>
    )
};

export default BannerInfo;