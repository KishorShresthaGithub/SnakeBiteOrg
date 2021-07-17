import React from 'react'
import {BiTime} from 'react-icons/bi'

function Stories_card({date,title}) {
    return (
        <div className="card bg-white rounded-xl p-4 py-10">
            <div className="flex items-center">
                <BiTime />
                <p className="ml-2">{date}</p>
            </div>
            <h2 className="font-bold text-lg mt-3">
                {title}
            </h2>
            
            <div className="btn-primary text-center w-full p-2 mt-8 cursor-pointer">Download File</div>

        </div>
    )
}

export default Stories_card
