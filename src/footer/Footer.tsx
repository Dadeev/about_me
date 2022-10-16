import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import linkedIn from "../assets/image/LinkedIn_logo_initials.png";
import github from "../assets/image/Octocat.png";
import telegram from "../assets/image/Telegram_logo.svg.webp";

export const Footer = () => {
    const linkedInPhoto = {
        backgroundImage: `url(${linkedIn})`
    }
    const githubPhoto = {
        backgroundImage: `url(${github})`
    }
    const telegramPhoto = {
        backgroundImage: `url(${telegram})`
    }

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.contacts}>
                    <h2 className={style.title}>Timothey Dadeev</h2>
                    <div className={style.icons}>
                        <a href='https://vk.com/naav1s' target='_blank' className={style.icon} style={linkedInPhoto}></a>
                        <a href='https://github.com/Dadeev' className={style.icon} target='_blank' style={githubPhoto}></a>
                        <a href='https://t.me/Tima_Dadeev' className={style.icon} target='_blank' style={telegramPhoto}></a>
                    </div>
                    <span className={style.rights}>©2022 All rights reserved</span>
                </div>
            </div>
        </div>
    );
};