import React from 'react';
import style from './Main.module.css'
import StyleContainer from '../common/styles/Container.module.css'
import photo from "../assets/image/cat.jpg";

export const Main = () => {
    const trello = {
        backgroundImage: `url(${photo})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={StyleContainer.container}>
                <h1 className={style.text}>
                    Hi, I’m
                    <span> Timothey Dadeev</span>
                    <br/>
                    <div className={style.position}>a Front-end Developer</div>
                </h1>
                <div className={style.photo} style={trello}></div>
            </div>
        </div>
    );
};