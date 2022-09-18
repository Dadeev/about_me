import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <span className={style.spanSubTitle}>Visit my portfolio and keep your feedback</span>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'Social network'} description={'very cool'}/>
                    <Project title={'TodoList'} description={'very cool, too'}/>
                    <Project title={'Samurai way'} description={'yoo'}/>
                    <Project title={'SpaceX'} description={'how is it possible? :3'}/>
                </div>
            </div>
        </div>
    );
};