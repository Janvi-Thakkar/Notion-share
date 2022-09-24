import React,{ useContext,useEffect,useLayoutEffect,useState} from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import Invite from "../components/Invite";

const MainRoute = () =>
{
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/invite" element={ <Invite /> } />
               
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default MainRoute;