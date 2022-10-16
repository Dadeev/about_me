import React from 'react';
import style from './Project.module.scss'

type ProjectType = {
    title: string
    description: string
    linkProject: string
    style: { backgroundImage: string }
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <a className={style.picture} style={props.style} href={props.linkProject} target="_blank"></a>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    )
};
