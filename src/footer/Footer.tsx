import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.contacts}>
                    <h2 className={style.title}>Timothey Dadeev</h2>
                    <div className={style.icons}>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                    </div>
                    <span className={style.rights}>©2022 All rights reserved</span>
                </div>
            </div>
        </div>
    );
};