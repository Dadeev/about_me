import React from 'react';
import style from './Project.module.css'

type ProjectType = {
    title: string
    description: string
    linkProject: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.projectBlock}>
            <a className={style.pictureBlock}
               href={props.linkProject}
               target="_blank"></a>
            <h3 className={style.titleBlock}>{props.title}</h3>
            <p className={style.descriptionBlock}>{props.description}</p>
        </div>
    )
};
