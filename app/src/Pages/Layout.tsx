import * as React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../Components/MenuBar";

export default function Layout() {
    return(
        <div>
            <MenuBar />
            <Outlet />
        </div>
    )
}