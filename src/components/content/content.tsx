import React from 'react';

import {DataStateType} from "../../DataState/DataState";
import {Navigate} from "react-router-dom";

type ContentPropsType = {
    page: DataStateType
    route: number
}
export const Content = (props: ContentPropsType) => {
    return (
        props.route < props.page.pages.length ?
            <>
                <div><h3>{props.page.pages[props.route].heading} </h3></div>

                <div> {props.page.pages[props.route].about} </div>
            </>
            :

            <Navigate to={'/*'}/>


    );

};


