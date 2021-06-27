import React, { useEffect, useState } from 'react'
import navs from './nav.json'
import{FaBars} from 'react-icons/fa'
import { Link, Redirect } from 'react-router-dom'
import {BiChevronDown} from 'react-icons/bi'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {BsToggleOn,BsToggleOff} from 'react-icons/bs'
function Nav() {
    const [mobileNav,setMobileNav]=useState(false);
    const [abc,setAbc]=useState();
    useEffect(() => {
        navs.map((res)=>(
            setAbc(res.content)
        ))
    }, [])
    return (
        <div>
            {/* top dark nav starts  */}
            <div className="bg_primaryDark py-1" style={{color:'white'}}>
                <div className="container mx-auto px-4 flex justify-between">
                    <div className="flex space-x-4 items-center">
                        <div className="hidden sm:block lg:text-sm">Follow Us</div>
                        {/* social media icons stats  */}
                        <div className="items-center hidden md:flex">                            
                            <a href="" className="mr-2">
                                <FaFacebookF />
                            </a>
                            
                            <a href="" className="mr-2">
                                <FaTwitter />
                            </a>
                            <a href="" className="mr-2">
                                <FaInstagram />
                            </a>
                            <a href="" className="mr-2">
                                <FaYoutube />
                            </a>
                        </div>
                        {/* social media icons ends  */}

                        <h6 className="text-sm sm:text-base lg:text-sm">Emergency Contact +9834893498</h6>
                    </div>
                    <div>
                        <h6 className="text-sm sm:text-base lg:text-sm flex items-center"> <BsToggleOn className="mr-2 font-bold text-3xl cursor-pointer" /> नेपाली</h6>
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
                    <Link to ="/">
                        <h4 className="font-bold text-lg mx-4 md:mx-2 md:text-xs lg:text-base lg:mx-4">SNAKEBITE NEPAL</h4>
                    </Link>
                    {/* web nav starts  */}
                    <div className="hidden md:block  flex-1 mx-4 md:mx-0 md:text-xs lg:text-base lg:mx-4">
                        <ul className='flex item-center dropdown cursor-pointer active:text-white'>
                        {navs.map((nav,index)=>(
                        
                            <div key={index} >                               
                                    <Link to={nav.to} className="flex items-center font-medium text-lg">
                                        <li className='px-4 h-full'>
                                            {nav.default} 
                                        </li>                                       
                                    </Link>
                                    {nav.drop  ? nav.content.map((a,index)=>{
                                        return(<div key={index} className="dropdown-content">
                                        <Link to={a.to}>
                                            <li>{a.default}</li>
                                        </Link>
                                    </div>)
                                    }):''}
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
