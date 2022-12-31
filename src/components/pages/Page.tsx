import React from 'react';
import { DataStateType} from "../../DataState/DataState";
import {useParams} from "react-router-dom";
import {Content} from "../content/content";

type PagePropsType = {
    dataState: DataStateType
}

export const Page = (props: PagePropsType) => {
    let params = useParams()

    return (
        <div>
            <Content
                page={props.dataState}
                route={Number(params.id)}

                /* header={props.dataState.pages[Number(params.id)].heading}
                 about={props.dataState.pages[Number(params.id)].about}*/
            />

        </div>
    );
};

