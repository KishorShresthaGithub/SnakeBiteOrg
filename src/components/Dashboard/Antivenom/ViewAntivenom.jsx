import React from 'react'
import{MdDeleteSweep} from 'react-icons/md'
import {RiEditBoxLine} from 'react-icons/ri'
function ViewAntivenom() {
    return (
        <table className=" border-collapse border border-green-800 table-auto text-left w-full">
            <thead className="">
                <tr>
                <th className="border border-gray-200 p-2">#</th>
                <th className="border border-gray-200 p-2">Antivenom Center</th>
                <th className="border border-gray-200 p-2">District</th>
                <th className="border border-gray-200 p-2">Address</th>
                <th className="border border-gray-200 p-2">Contact</th>
                <th className="border border-gray-200 p-2">Actions</th>                
                </tr>
            </thead>
            <tbody>
                <tr className="">
                    <td  className="border border-gray-200 p-2">1</td>
                    <td  className="border border-gray-200 p-2">Name of Antivenom</td>
                    <td  className="border border-gray-200 p-2">District</td>
                    <td  className="border border-gray-200 p-2">Address</td>
                    <td  className="border border-gray-200 p-2">Contact</td>                    
                    <td className=" border border-gray-200 p-2 flex items-center">
                        <RiEditBoxLine className="bg-blue-400 h-10 w-10 p-2 text-white mr-2" />
                        <MdDeleteSweep className="bg-red-500 h-10 w-10 p-2 text-white" />
                    </td>                    
                </tr>
            </tbody>
        </table>
    )
}

export default ViewAntivenom
