import React from 'react'

function ContactForm() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2 w-80 md:w-96 md:col-span-1">
                    <label for="name">Name</label><br />
                    <input type="text" className="h-10 p-4 w-full mt-2 rounded shadow" id="name" />
                </div>
                <div className="col-span-2 w-80 md:w-96 md:col-span-1">
                    <label for="name">Address</label> <br />
                    <input type="text" className="h-10 p-4 w-full mt-2 rounded shadow" id="name" />
                </div>
                <div className="col-span-2 w-80 md:w-96 md:col-span-1">
                    <label for="name">Email</label><br />
                    <input type="email" className="h-10 p-4 w-full mt-2 rounded shadow" id="name" />
                </div>
                <div className="col-span-2 w-80 md:w-96 md:col-span-1">
                    <label for="name">Phone no</label><br />
                    <input type="text" className="h-10 p-4 w-full mt-2 rounded shadow" id="name" />
                </div>
                <div className="col-span-2 mt-5">
                    <textarea rows="4" className="p-4 rounded shadow w-full" placeholder="Your Message">
                    </textarea>
                </div>
                <button className="btn-primary w-40">SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default ContactForm
