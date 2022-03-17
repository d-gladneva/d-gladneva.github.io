import React, {useState} from 'react';
import s from './Accordion.module.css'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={s.accordionWrap}>
        <div className={s.accordion}>
            <div className={s.accordionTitle} onClick={() => setIsActive(!isActive)}>
                <span>{title}</span>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={s.accordionContent}>{content}</div>}
        </div>
        </div>
    );
};

export default Accordion;