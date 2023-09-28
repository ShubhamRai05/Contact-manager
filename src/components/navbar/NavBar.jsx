import React from "react"
import { Link } from "react-router-dom"

let NavBar = () => {
    return (
        <>
            <nav className=" h-15 bg-slate-400 ">
                <ul className="flex h-full justify-start font-bold container ">
                    <Link className=" text-xl m-4" to={"/" }>
                       <i className="fa fa-mobile text-gray-900" /> Contact  <span className="text-gray-900">Manager</span>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default NavBar