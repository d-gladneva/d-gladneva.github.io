import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img className={s.leftArrHeader} src={require(`../../imgs/leftArrHeader.svg`)}/>
        <span>Refer a friend and get $10 off! 🔥 Offer ends February 27!</span>
        <img className={s.rightArrHeader} src={require(`../../imgs/rightArrHeader.svg`)}/>
    </header>
};

export default Header;