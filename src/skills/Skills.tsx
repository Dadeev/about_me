import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Css'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse, pariatur'}/>
                    <Skill title={'TypeScript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse, pariatur'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse, pariatur'}/>
                </div>
            </div>
        </div>
    );
};