import React from 'react';
import s from './faq.module.css';
import Accordion from "../Accordion/Accordion";

const Faq = () => {

    const accordionData = [
        {
            title: 'How does work?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
        },
        {
            title: 'What is a game?',
            content: `A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset. A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset.`
        },
        {
            title: 'Is there a free trial available?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'How does billing work?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        }
    ];


    return (
        <div className={s.faq}>
            <h1 className={s.faqTitle}>Frequently asked questions</h1>
            <p className={s.faqText}>Everything you need to know about the games.</p>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>

        </div>
    )
};

export default Faq;