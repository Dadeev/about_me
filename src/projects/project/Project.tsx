import React from 'react';
import style from './Project.module.css'

type ProjectType = {
    title: string
    description: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.picture}>
                <button className={style.button}>Watch</button>
            </div>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};
