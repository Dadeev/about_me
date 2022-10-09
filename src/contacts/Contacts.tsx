import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.blockContainer}`}>
                <Title subTitle={''} title={'Contact me'}/>
                <form className={style.contact} action="#" autoComplete={'on'}>
                    <div className={style.inputs}>
                        <div className={style.InputContainer}>
                            <input className={style.input} type="text" required/>
                            <span className={style.ContactSpan}>Email*</span>
                        </div>
                        <div className={style.InputContainer}>
                            <input className={style.input} type="email" required/>
                            <span className={style.ContactSpan}>Name*</span>
                        </div>
                    </div>
                    <div className={style.InputContainer}>
                        <input required type={'text'} className={style.input}/>
                        <span className={style.ContactSpan}>Phone</span>
                    </div>
                </form>
                <button className={style.button}>Send me a message</button>
            </div>
        </div>
    );
};
