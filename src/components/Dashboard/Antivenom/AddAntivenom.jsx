import React from 'react'

function AddAntivenom() {
    return (
        <div>
            <div className="flex flex-col mb-2 card w-full px-2 py-4">
                    <label htmlFor="category">Add District</label>
                    <input type="text" name="" id="category" className="md:w-80 p-2 border-2 border-gray-100 rounded" />
                    <button className="btn-primary w-28 mt-4">Submit</button>
            </div>

            <div className="flex flex-col mr-4 px-2 py-2">
                    <label htmlFor="title">Select District of Antivenom Center</label>
                    <select name="" id="" className="md:w-96 p-2 border-2 border-gray-100 rounded">
                        <option value="">Kathmandu</option>
                    </select>
            </div>
            <div className="flex flex-col mr-4 px-2 py-2">
                    <label htmlFor="title">Add Name of Antivenom Center</label>
                    <input type="text" name="" id="title" className="md:w-96 p-2 border-2 border-gray-100 rounded" />
            </div>
            <div className="flex flex-col mr-4 px-2 py-2">
                    <label htmlFor="title">Add Address of Antivenom Center</label>
                    <input type="text" name="" id="title" className="md:w-96 p-2 border-2 border-gray-100 rounded" />
            </div>
            <div className="flex flex-col mr-4 px-2 py-2">
                    <label htmlFor="title">Add Contact of Antivenom Center</label>
                    <input type="text" name="" id="title" className="md:w-96 p-2 border-2 border-gray-100 rounded" />
            </div>
            <div className="flex flex-col mr-4 px-2 py-2">
                    <label htmlFor="title">Add Map URL of Antivenom Center</label>
                    <input type="text" name="" id="title" className="md:w-96 p-2 border-2 border-gray-100 rounded" />
            </div>
            <button className="btn-primary w-28 mt-4">Submit</button>

        </div>
    )
}

export default AddAntivenom
