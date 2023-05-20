import * as React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../Components/MenuBar";
import Navigation from "../Components/Navigation";

export default function Layout() {
    return(
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
}