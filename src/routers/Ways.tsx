import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageLayout from "../layout/PageLayout";
import Main from "../pages/Main";
import Blocos from "../components/Blocos";
import NotFound from "../pages/NotFound";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLayout /> }>
                            <Route index element={
                                <Main>
                                    <Blocos 
                                        elemento=""
                                        nomeElemento=""
                                        nAtom=""
                                        peso=""
                                    />
                                </Main>
                            } />
                        </Route>

                        <Route path="*" element={
                            <NotFound />
                        } />
                        
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Ways;