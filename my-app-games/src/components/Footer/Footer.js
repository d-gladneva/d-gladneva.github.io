import React from 'react';
import s from './Footer.module.css';

const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={s.firstLine}>
                <div className={s.firstLineInfo}>
                    <span>Join our newsletter</span>
                    <span>We’ll send you a nice letter one per week. No spam.</span>
                </div>
                <div className={s.inputBox}>
                <input className={s.firstLineInput}></input>
                <button className={s.footerSubscribe}><span>Subscribe</span></button>
                </div>
            </div>
            <hr/>
            <div className={s.footerCategories}>
                <div className={s.footerBox1}>
                <span className={s.footerCategoriesTitle}>Categories</span>
                <ul>
                    <li>Strategy</li>
                    <li>Strategy</li>
                    <li>Strategy</li>
                    <li>Strategy</li>
                    <li>Strategy</li>
                    <li>Strategy</li>
                </ul>
                </div>
                <div>
                    <span>Categories</span>
                    <ul>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                    </ul>
                </div>
                <div>
                    <span>Categories</span>
                    <ul>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                    </ul>
                </div>
                <div>
                    <span>Categories</span>
                    <ul>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                        <li>Strategy</li>
                    </ul>
                </div>
            </div>
            <div className={s.copyright}>Copyright © GameVendor, 2022</div>
        </div>
    )
};

export default Footer;