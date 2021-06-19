import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import {BiNews} from 'react-icons/bi'

function News_Card({Ndate,Ncategory,Ntitle,Nimg}) {
    return (
        <div className="card">
            {Nimg.length!=0?
            <img src={Nimg} alt="Ntitle" />
            :''}
            <div className="card-body p-3 mt-2">
                <div className="p2 flex justify-between items-center">
                    <p className="flex items-center text-sm"><span className="mr-1"><BiTimeFive /></span>  {Ndate}</p>
                    <p className="flex items-center text-sm"><span className="mx-1"><BiNews /></span> {Ncategory}</p>
                </div>
                <h1 className="mt-5 font-medium text-md">{Ntitle} </h1>

            </div>
        </div>
    )
}

export default News_Card
