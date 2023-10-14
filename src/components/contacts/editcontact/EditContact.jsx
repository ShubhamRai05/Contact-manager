import React from "react"
import { Link } from "react-router-dom"

let EditContact = () => {
    return (
        <>
            <section className="container p-3">
                <h1 className="text-xl font-semibold ">Edit Contact </h1>
                <p className="font-light italic text-sm pt-4" >Consequat dof sunt et sint dolore officia nostrud quis. Voluptate et qui id eu ipsum id proident elit fugiat. Deserunt voluptate eu magna labore cillum enim est ullamco do officia dolor anim ex. Laboris ad exercitation duis aute magna sit consequat sit occaecat. Exercitation elit anim cupidatat ullamcfo esse voluptgate adipisicing eu enim. Tempor aliquip cillum Lorem ullamco cupidatat veniam velit ex duis consequat ipsum anim esse.</p>
                <form className=" flex flex-row p-4 ">
                    <div className="form-container flex flex-col gap-4 w-1/2">
                        <div>
                            <input type="text" className="w-1/2 p-2  outline-none focus:border-2 border-slate-500 rounded-md" placeholder="Username" />
                        </div>
                        <div>
                            <input type="text" className="w-1/2 p-2  outline-none focus:border-2 border-slate-500 rounded-md" placeholder="Photo URL" />
                        </div>
                        <div>
                            <input type="text" className="w-1/2 p-2  outline-none focus:border-2 border-slate-500 rounded-md" placeholder="Mobile" />
                        </div>
                        <div>
                            <input type="text" className="w-1/2 p-2  outline-none focus:border-2 border-slate-500 rounded-md" placeholder="Email" />
                        </div>
                        <div>
                            <input type="text" className="w-1/2 p-2  outline-none focus:border-2 border-slate-500 rounded-md" placeholder="Company" />
                        </div>
                        <div>
                            <input type="text" className="w-1/2 p-2  outline-none focus:border-2 border-slate-500 rounded-md" placeholder="Title" />
                        </div>
                        <div>
                            <select className="w-1/2 p-2  outline-none">
                                <option>Select a group</option>
                            </select>
                        </div>
                        <div className="flex flex-row"><div>
                            <Link><button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-2 m-2 rounded">Edit</button></Link>

                        </div>
                            <div>
                                <Link to="/contacts/list"><button className="bg-blue-500 hover:bg-blue-600  text-white font-bold py-1 px-2 m-2 rounded">Cancel</button></Link>

                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <img className="h-48 w-52" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg" />
                    </div>
                 
                </form>
           
            </section>
        </>
    )
}

export default EditContact