import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageLayout from "../layout/PageLayout";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLayout /> }>

                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Ways;