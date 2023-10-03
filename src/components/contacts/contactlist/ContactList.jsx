import React from "react"
import { Link } from "react-router-dom"

let ContactList = () => {
    return (
        <>
            <section className="contact-search container ">
                <div className="">
                    <p className=" mt-8 mb-4">
                        <span className="text-xl font-semibold "> Contact Manager</span>
                        <Link to={"/contacts/add"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-5 px-4 rounded">
                            <i className="fa fa-plus-circle" /> New</Link></p>
                    <p className="italic font-light ">loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"</p>
                    <div className="form">
                        <div class="mb-4">

                            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mt-4 leading-tight focus:outline-none focus:outline-1" id="search" type="text" placeholder="Search Here" />
                            <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-2 m-2 rounded">Search</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list flex flex-row  container justify-evenly flex-wrap gap-8">
                <div className="card flex flex-row justify-evenly gap-3 border border-red-100 p-6 bg-white">
                    <div className="card-image ">
                        <img className="h-48 w-40" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg" />
                    </div>
                    <div className="personal-details flex  flex-col justify-center gap-8">
                    <div>
                            Name : <span>Brad Gibson</span>
                        </div>
                        <div>
                            Mobile : <span> 8928213249</span>
                        </div>
                        <div>
                        Email :  <span> contacthere.shubham@gmail.com </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div><Link to={"/contacts/view/:contactId"}><button><i className="fa fa-eye"></i></button></Link></div>
                        <div><Link to={"/contacts/edit/:contactId"}><button><i className="fa fa-pencil"></i></button></Link></div>
                        <div><Link><button><i className="fa fa-trash"></i></button></Link></div>

                    </div>
                </div>

                <div className="card flex flex-row gap-3 border border-red-100 p-6 bg-white ">
                    <div>
                        <div className="card-image ">
                            <img className="h-48 w-40" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg" />
                        </div>
                    </div>
                    <div className="personal-details flex  flex-col justify-center gap-8">
                        <div>
                            Name : <span>Brad Gibson</span>
                        </div>
                        <div>
                            Mobile : <span> 8928213249</span>
                        </div>
                        <div>
                        Email :  <span> contacthere.shubham@gmail.com </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div><button><i className="fa fa-eye text-bl"></i></button></div>
                        <div><button><i className="fa fa-pencil"></i></button></div>
                        <div><button><i className="fa fa-trash"></i></button></div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default ContactList