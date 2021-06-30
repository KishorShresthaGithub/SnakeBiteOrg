import React from 'react'
import{MdDeleteSweep} from 'react-icons/md'
import {RiEditBoxLine} from 'react-icons/ri'
function ViewBook() {
    return (
        <table className=" border-collapse border border-green-800 table-auto text-left w-full">
            <thead className="">
                <tr>
                <th className="border border-gray-200 p-2">#</th>
                <th className="border border-gray-200 p-2">Image</th>
                <th className="border border-gray-200 p-2">Book Name</th>
                <th className="border border-gray-200 p-2">Book Authors</th>
                <th className="border border-gray-200 p-2">Book File</th>
                <th className="border border-gray-200 p-2">Actions</th>                
                </tr>
            </thead>
            <tbody>
                <tr className="">
                    <td  className="border border-gray-200 p-2">1</td>
                    <td  className="border border-gray-200 p-2">
                        <img src="" alt="image" srcset="" />
                    </td>
                    <td  className="border border-gray-200 p-2">Book Name</td>                  
                    <td  className="border border-gray-200 p-2">Book Authors</td> 
                    <td  className="border border-gray-200 p-2">Book File</td>                
  
                    <td className=" border border-gray-200 p-2 flex items-center">
                        <RiEditBoxLine className="bg-blue-400 h-10 w-10 p-2 text-white mr-2" />
                        <MdDeleteSweep className="bg-red-500 h-10 w-10 p-2 text-white" />
                    </td>                    
                </tr>
            </tbody>
        </table>
    )
}

export default ViewBook
