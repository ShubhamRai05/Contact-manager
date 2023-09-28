import React from "react"
import { Link } from "react-router-dom"

let NavBar = () => {
    return (
        <>
            <nav className=" h-15 bg-slate-400">
                <ul className="flex h-full justify-start font-bold ">
                    <Link className="m-3 text-xl" to={"/"}>
                       <i className="fa fa-mobile text-gray-900" /> Contact  <span className="text-gray-900">Manager</span>
                    </Link>

                </ul>
            </nav>
        </>
    )
}

export default NavBar