import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title subTitle={'Visit my portfolio and keep your feedback'} title={'My Projects'}/>
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