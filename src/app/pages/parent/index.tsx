import { JSX } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Parent() : JSX.Element {
    return <>
        <div>
            parent
            <br></br>
            <Link to="children">link to children</Link>
            <Outlet></Outlet>
        </div>
    </>
}