import React from 'react'

function Antivenom_card({name,no}) {
    return (
        <div className="card px-4 py-6 bg_white rounded-md">
            <p>District</p>
            <h4 className="font-semibold text-md md:text-lg uppercase mt-2">{name}</h4>
            <h1 className="font-bold text-5xl mt-2">{no}</h1>
        </div>
    )
}

export default Antivenom_card
