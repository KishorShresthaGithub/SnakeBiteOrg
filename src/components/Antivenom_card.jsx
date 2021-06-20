import React from 'react'
import {Link} from 'react-router-dom'

function Antivenom_card({name,no}) {
    return (
        <Link to="">
        <div className="card px-4 pt-7 pb-10 bg_white rounded-md">
            <p>District</p>
            <h4 className="font-semibold text-md md:text-lg uppercase mt-2">{name}</h4>
            <h1 className="font-bold text-5xl mt-2">{no}</h1>
        </div>
        </Link>
    )
}

export default Antivenom_card
