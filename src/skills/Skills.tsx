import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";
import htmlImage from "../assets/image/htmlImage.png";
import sassImage from "../assets/image/sassImage.svg.png";
import tsImage from "../assets/image/typescript.png";
import reactImage from "../assets/image/reactjs.png";
import reduxImage from "../assets/image/reduxImage.png";
import storyBookImage
    from "../assets/image/storybook.png";
import unitTestImage from "../assets/image/unitTest.png";
import gitImage from "../assets/image/Git-Icon-1788C.png";
import reactHookFormImage from "../assets/image/reactHookFormImage.svg";

export const Skills = () => {
    const html = {backgroundImage: `url(${htmlImage})`}
    const sass = {backgroundImage: `url(${sassImage})`}
    const ts = {backgroundImage: `url(${tsImage})`}
    const react = {backgroundImage: `url(${reactImage})`}
    const redux = {backgroundImage: `url(${reduxImage})`}
    const storyBook = {backgroundImage: `url(${storyBookImage})`}
    const unitTest = {backgroundImage: `url(${unitTestImage})`}
    const git = {backgroundImage: `url(${gitImage})`}
    const reactHookForm = {backgroundImage: `url(${reactHookFormImage})`}
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title subTitle={'1.5+ Years of Experience'} title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'HTML5'} style={html}
                           description={'Responsive design, flex, links, headers, images and etc.'}/>
                    <Skill title={'SASS/SCSS'} style={sass}
                           description={'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries'}/>
                    <Skill title={'JS/TS'} style={ts}
                           description={'Native JS: classes, functions, working with arrays and objects, Promises, REST Api; TS: as type, generics, infer'}/>
                    <Skill title={'React'} style={react}
                           description={"Class and functional components, components's life-cycle methods, props, hooks, HOC"}/>
                    <Skill title={'Redux'} style={redux}
                           description={'FLUX-concepted data flow, reducer, dispatch, redux-thunk, redux-toolkit'}/>
                    <Skill title={'Storybook'} style={storyBook}
                           description={'Testing components and modules, decorators'}/>
                    <Skill title={'Unit-Test'} style={unitTest}
                           description={"Testing choosen modules and the whole application's workability"}/>
                    <Skill title={'GIT'} style={git}
                           description={'Creating new repositories, push- and pull-requets, merge, repos cloning'}/>
                    <Skill title={'React-hook-form'} style={reactHookForm}
                           description={"Forms, validations, submiting with server's responsing"}/>
                </div>
            </div>
        </div>
    );
};