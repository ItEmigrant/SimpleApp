import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../DataState/DataState";
import {useWindowSize} from "../helpers/useWwindowsSize";
import {LocalStorage} from "./pages/LocalStorage";


export const Site = () => {

    const size = useWindowSize();

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                {size < 991
                    ?
                    <div className={styles.nav}>
                        <div><NavLink to={"/page/0"}
                                      className={({isActive}) => isActive ? styles.active : styles.navLink}>Page
                            One</NavLink></div>
                        <div><NavLink to={"/page/1"}
                                      className={({isActive}) => isActive ? styles.active : styles.navLink}>Page
                            Two</NavLink></div>
                        <div><NavLink to={"/page/2"}
                                      className={({isActive}) => isActive ? styles.active : styles.navLink}>Page
                            Three</NavLink></div>

                        <div><NavLink to={"/page/localStorage"}
                                      className={({isActive}) => isActive ? styles.active : styles.navLink}>LocalStorage</NavLink>
                        </div>
                        {/*  <div><NavLink to={"/page3"} className={({isActive}) => isActive ? styles.active : styles.navLink}>Page
                        Three</NavLink></div>*/}

                    </div>
                    : <div></div>}


                <div className={styles.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/page1"}/>}/>

                        <Route path={"/page/:id"} element={<Page dataState={dataState}/>}/>
                        {/* <Route path={"/page3"} element={<PageThree/>}/>*/}

                        <Route path={"/page/localStorage"} element={<LocalStorage/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

