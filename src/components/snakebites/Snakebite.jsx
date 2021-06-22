import React from 'react'
import {BiTime} from 'react-icons/bi'
import {Link } from 'react-router-dom'

function Snakebite({img,title,des,date}) {
    return (
        <Link to="snakes_and_Snakebites/1">
        <div className='flex flex-col md:flex-row items-center mb-4 md:mb-16'>
            {/* image container  */}
            <div className="mb-2">
                <img src={img} alt="" />
            </div>
        
            {/* content  */}
            <div className="md:ml-5">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="leading-6 py-2 w-full h-14 overflow-clip overflow-hidden ...">{des}</p>
                <div className="flex items-center mt-2">
                    <BiTime /> <p className='ml-2'><i>{date}</i></p>
                </div>
            </div>
            <hr className="border-1 border-gray-400 mt-4" />
        </div>
        </Link>
    )
}

export default Snakebite
