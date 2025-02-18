import { JSX } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Children() : JSX.Element {
    return <>
        <div>
        chidlren
            <br></br>
            <Link to="sibling">link to sibblineqweqweg</Link>
            <Outlet></Outlet>
        </div>
    </>
}