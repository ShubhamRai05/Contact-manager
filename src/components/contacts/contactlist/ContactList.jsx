import React from "react"
import { Link } from "react-router-dom"

let ContactList = () => {
    return (
        <>
            <section className="contact-search container">
                <div className="">
                    <p className=" m-4"><span className="text-xl font-semibold"> Contact Manager</span>
                        <Link to={"/contacts/add"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-5 px-4 rounded">
                            <i className="fa fa-plus-circle" /> New</Link></p>
                    <p className="italic font-light ">loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"</p>
                    <div className="form">
                        <div class="mb-4">
                           
                            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-1" id="search" type="text" placeholder="Search Here" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 m-2 rounded">Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactList