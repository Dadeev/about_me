import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title subTitle={'1+ Years of Experience'} title={'Skills'}/>
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