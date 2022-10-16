import React from 'react';
import style from './Skill.module.scss'

type SkillType = {
    title: string
    description: string
    style: {backgroundImage: string}
}

export const Skill = (props: SkillType) => {
    return (
        <div className={style.skill_block}>
            <div className={style.Skill_photo} style={props.style}></div>
            <div>
                <h3 className={style.Skill_title}>{props.title}</h3>
            </div>
            <div className={style.Skill_spanCont}>
                <span className={style.Skill_description}>{props.description}</span>
            </div>
        </div>
    );
};
