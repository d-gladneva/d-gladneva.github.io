import React from 'react';
import s from './Search.module.css';

const Search = () => {

    return (
        <div className={s.subnavWrap}>
            <div className={s.subnav}>
                <div className={s.input1}>
                    <h1 className={s.searchTitle}>Search for games</h1>
                    <input type="search" placeholder="Search..."/>
                </div>
                <div className={s.input2}>
                    <h1 className={s.searchTitle}>Category</h1>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div  className={s.input3}>
                    <h1 className={s.searchTitle}>Sort by</h1>
                    <select>
                        <option>Popular</option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
        </div>
    )
};

export default Search;