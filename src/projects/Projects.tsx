import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title subTitle={'Visit my projects and keep your feedback'} title={'My Projects'}/>
                <div className={style.projects}>
                    <Project title={'Social network'}
                             description={'very cool'}
                             linkProject={'https://github.com/Dadeev/samurai-way'}/>
                    <Project title={'SpaceX'}
                             description={'very cool too'}
                             linkProject={'https://github.com/Dadeev/homeworks-by-ignat'}/>
                    <Project title={'Social network'}
                             description={'Trello'}
                             linkProject={'https://github.com/Dadeev/it-incubator-todolist-ts'}/>
                </div>
            </div>
        </div>
    );
};