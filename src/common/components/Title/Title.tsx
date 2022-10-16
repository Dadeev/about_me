import React from 'react';
import style from './Title.module.scss'

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