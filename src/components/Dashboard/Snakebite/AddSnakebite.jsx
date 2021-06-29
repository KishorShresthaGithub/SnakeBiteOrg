import React, { useState } from 'react'

function AddSnakebite() {
    const [layout,setLayout]=useState('snakebite');
    let TabLayout;
    if(layout==='snakebite'){
       TabLayout= <div className="py-10">
            <h1 className="font-semibold">Add {layout}</h1>
       </div>
    }
    if(layout==='book'){
       TabLayout= <div className="py-10">
            <h1 className="font-semibold">Add {layout}</h1>
       </div>
    }
    if(layout==='link'){
       TabLayout= <div className="py-10">
            <h1 className="font-semibold">Add {layout}</h1>
       </div>
    }

    return (
        <div>
            <div className="flex items-center">
                <button className="border border-gray-600 px-3 py-2 rounded shadow mr-2"
                onClick={()=>{setLayout('snakebite')}}>Add Snakes & Snakebite</button>
                <button className="border border-gray-600 px-3 py-2 rounded shadow mr-2"
                onClick={()=>{setLayout('book')}}>Add Books</button>
                <button className="border border-gray-600 px-3 py-2 rounded shadow mr-2"
                onClick={()=>{setLayout('link')}}>Add Important Links</button>
            </div> 
            {TabLayout}         
        </div>
    )
}

export default AddSnakebite
