import React from 'react';
import style from './Title.module.css'

type TitleType = {
    subTitle: string
    title: string
}

export const Title = (props: TitleType) => {
    return (
        <>
            <span className={style.spanSubTitle}>{props.subTitle}</span>
            <h2 className={style.title}>{props.title}</h2>
        </>
    );
};