import React from 'react';
import s from './Pagination.module.css';

const Pagination = () => {

    return (
        <div className={s.paginationWrap}>
        <div className={s.pagination}>
            <div>
            <span><img src={require('../../imgs/leftArr.svg')}/></span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>...</span>
            <span>99</span>
            <span><img src={require('../../imgs/rightArr.svg')}/></span>
            </div>
        </div>
        </div>
    )
};

export default Pagination;