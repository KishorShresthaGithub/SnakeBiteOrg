import React from 'react'

function Home_venomous({img,name}) {
    return (
        <div className="text-center">
        <div className="card">
            <img src={img} alt="" className="object-cover h-80 md:h-72"    />
        </div>
        <h4 className="font-bold text-xl mt-5">{name}</h4>
        <button className="btn-primary mt-5">Info</button>
        </div>
    )
}

export default Home_venomous
