import React from "react"
import { Link } from "react-router-dom"

let ContactList = () => {
    return (
        <>
            <section className="contact-search">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 m-4"><span className="text-xl font-semibold"> Contact Manager</span>
                                    <Link to={"/contacts/add"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-5 px-4 rounded">
                                   <i className="fa fa-plus-circle"/> New</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactList