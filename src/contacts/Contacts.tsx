import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.blockContainer}`}>
                <div className={style.contactsWrap}>
                    <h2 className={style.title}>Contact</h2>
                    <form className={style.contact} action="#" autoComplete={'on'}>
                        <input className={style.input} type="text" placeholder={"What's your name?"} required/>
                        <input className={style.input} type="text" placeholder={"Your Email"} required/>
                        <textarea className={style.textArea} placeholder={"Let's chat (:"} required></textarea>
                    </form>
                    <button className={style.button}>Submit</button>
                </div>
            </div>
        </div>
    );
};
