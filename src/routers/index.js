import React from "react";
import { Routes, Route } from 'react-router-dom'
import UI from "../components/common/UI";

const Router = (props) => {
    return (
        <>
            <Routes>
                <Route path='*' element={<UI />}></Route>
            </Routes>
        </>
    );
}
export default Router;