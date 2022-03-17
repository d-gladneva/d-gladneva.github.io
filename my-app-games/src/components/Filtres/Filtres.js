import React from 'react';
import s from './Filtres.module.css';

const Filtres = () => {

    return (
        <div className={s.filtresWrap}>
        <div className={s.filtres}>
            <div><span>Strategy X</span></div>
            <div><span>RPG X</span></div>
            <div><span>Action X</span></div>
            <div><span>Shooter X</span></div>
            <div><span>Clear all X</span></div>
        </div>
        </div>
    )
};

export default Filtres;