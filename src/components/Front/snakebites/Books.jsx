import React from 'react'
import { Link } from 'react-router-dom'
import {BiChevronsRight} from 'react-icons/bi'

function Books() {
    return (
        <div className='md:mx-10 w-80 md:w-auto bg_lightGrey p-4 md:p-8 shadow-md'>
            <h1 className="text-2xl font-bold mb-2">Books & Articles</h1>
            <hr className="border-1 border-gray-400 py-2" />
            <img src="https://images.penguinrandomhouse.com/cover/9781465402462" alt="" />
            <div className="text-center">
                <h1 className="text-xl font-bold py-4">Venomous Sankes In Nepal</h1>
                <p className="leading-6">
                Authors : S.K. Sharma, D.P. Pandey, K.B. Shah, F. Tillack, F. Chappuis, C.L. Thapa, E. Alirol & U. Kuch
                </p>
                <div className="btn-primary w-full mt-6">DOWNLOAD</div>
                <hr className="border-1 border-gray-400 mt-4" />

            </div>
            {/* links  */}
            <Link to="">
            <div className="flex mt-4">
                <BiChevronsRight className='font-bold text-xl mt-1' />
                <p className="font-medium">WHO to invest $136M to combat snakebites</p>
            </div>
            </Link>
        </div>
    )
}

export default Books
