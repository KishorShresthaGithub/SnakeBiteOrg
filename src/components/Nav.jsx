import React, { useState } from 'react'
import navs from './nav.json'
import{FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {BiChevronDown} from 'react-icons/bi'
import {AiOutlineCloseSquare} from 'react-icons/ai'
function Nav() {
    const [mobileNav,setMobileNav]=useState(false);
    return (
        <div>
            {/* top dark nav starts  */}
            <div className="bg_primaryDark py-1" style={{color:'white'}}>
                <div className="container mx-auto px-4 flex justify-between">
                    <div className="flex space-x-4">
                        <div className="hidden sm:block lg:text-sm">Follow Us</div>
                        <h6 className="text-sm sm:text-base lg:text-sm">Emergency Contact +9834893498</h6>
                    </div>
                    <div>
                        <h6 className="text-sm sm:text-base lg:text-sm">नेपाली</h6>
                    </div>
                </div>
            </div>
            {/* top dark nav ends  */}

            <div className="bg_primary py-4 relative">
                <div className="container mx-auto px-8 flex items-center sm:px-0">
                    
                    <h4>
                        <FaBars className={mobileNav ? "text-xl cursor-pointer absolute opacity-0 transition duration-400 ease-in-out":'text-xl cursor-pointer md:hidden opacity-1  transition duration-500 ease-in-out'} onClick={()=>{setMobileNav(!mobileNav)}} />
                        <AiOutlineCloseSquare className={mobileNav ? "text-xl cursor-pointer md:hidden transition duration-400 ease-in-out" : 'absolute opacity-0 transition duration-400 ease-in-out'} />
                    </h4>
                    <h4 className="font-medium text-lg mx-4 md:mx-2 md:text-xs lg:text-base lg:mx-4">SNAKEBITE NEPAL</h4>
                    {/* web nav starts  */}
                    <div className="hidden md:block flex-1 mx-4 md:mx-0 md:text-xs lg:text-base lg:mx-4">
                        <ul className='flex item-center cursor-pointer active:text-white'>
                        {navs.map((nav)=>(
                            <div key={navs.indexOf(nav)} >                        
                                <Link to={nav.to} className="flex items-center">
                                <li className="px-4" >{nav.default} </li> 
                                 {nav.drop? 
                                    <div>
                                        <BiChevronDown  className="font-semibold" />
                                    </div> :''}
                                    </Link>
                            </div>
                    
                    ))}
                        </ul>
                    </div>
                    {/* web nav ends  */}
                </div>
            </div>
            {/* mobile nav starts  */}
            <div className={mobileNav ? " z-10 bg-gray-100 h-screen w-9/12 pb-8 container mx-auto absolute transform translate-x-0 transition duration-500 ease-in-out" : 'z-10 absolute h-screen transform -translate-x-full transition duration-500 ease-in-out'}>
                <ul>
                    {navs.map((nav)=>(
                        <>
                            <div key={navs.indexOf(nav)} >
                                <Link to={nav.to} className="flex justify-between hover:bg-gray-200 cursor-pointer py-3 px-8 transform"><li className="" >{nav.default} </li> 
                                {nav.drop? 
                                    <div>
                                        <BiChevronDown  className="font-medium" />
                                    </div> :''}
                                </Link>
                            </div>
                            <hr className="mx-8" />
                        </>
                    ))}
                </ul>
            </div>
            {/* mobile nav ends */}
        </div>
    )
}

export default Nav
