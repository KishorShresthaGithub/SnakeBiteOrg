import React from 'react'
import {Link} from 'react-router-dom'

function AntivenomCard({name,no}) {
    return (
        <Link to="/antivenom/1">
        <div className="card px-3 md:px-4 pt-7 pb-10 bg_white rounded-md">
            <p className="text-sm">District</p>
            <h4 className="md:font-bold font-semibold text-md md:text-lg uppercase mt-2">{name}</h4>
            <h1 className="font-bold text-5xl mt-2">{no}</h1>
        </div>
        </Link>
    )
}

export default AntivenomCard
