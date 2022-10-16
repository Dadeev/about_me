import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";
import trelloImage from './../assets/image/1402587587_1757596881.jpg'
import socialImage from './../assets/image/1652081614_5-celes-club-p-samurai-art-krasivo-6.jpg'
import projectImage from './../assets/image/1625746950_32-phonoteka-org-p-krasnii-samurai-art-krasivo-33.jpg'

export const Projects = () => {
    const trello = {
        backgroundImage: `url(${trelloImage})`
    }
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const project = {
        backgroundImage: `url(${projectImage})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title subTitle={'Visit my projects and keep your feedback'} title={'My Projects'}/>
                <div className={style.projects}>
                    <Project title={'Social network'} description={'very cool'} style={social}
                             linkProject={'https://github.com/Dadeev/samurai-way'}/>
                    <Project title={'SpaceX'} description={'very cool too'} style={project}
                             linkProject={'https://github.com/Dadeev/homeworks-by-ignat'}/>
                    <Project title={'Trello'} description={'some text'} style={trello}
                             linkProject={'https://github.com/Dadeev/it-incubator-todolist-ts'}/>
                </div>
            </div>
        </div>
    );
};