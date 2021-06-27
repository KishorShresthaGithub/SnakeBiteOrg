import React from 'react'
import Page from '../template/Page'
import {Link} from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import {HiLocationMarker} from 'react-icons/hi'
import {FaPhoneAlt} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'


function Contact() {
    return (
        <Page>
            <div className="" style={{zIndex:'-10'}}>
                <div className="w-full h-96 relative" style={{zIndex:'-1'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.856579661726!2d85.32444601453862!3d27.721714131468364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196dbd2b0f61%3A0xb394bc8610c6459!2sTrioPlus%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1624424132230!5m2!1sen!2snp" 
                    className="w-full h-full" 
                    loading="lazy"></iframe>
                </div>
                <div className="bg-gray-900 absolute w-full bg-opacity-80 h-96" style={{top:'5.2rem',zIndex:'-1'}}>
                    <div className="container mx-auto px-4 py-8 text-white">
                        <div className="h1 font-bold text-2xl mt-10">CONTACT US</div>

                        <a href="google.com">
                            Click here to navigate in Google Map
                        </a>

                    </div>
                </div>                
            </div>
            <div className=" md:container md:mx-auto md:px-4 -mt-52 pb-20 pt-10" style={{zIndex:'100'}}>
                    <div className="card bg-gray-100">
                        <div className="grid md:grid-cols-3">
                            <div className="md:col-span-2 md:px-5 py-10">
                                <ContactForm />
                            </div>
                            <div className="bg-yellow-500 p-4 md:p-10">
                                <h1 className="font-bold text-xl">CONTACT INFORMATION</h1>
                                <div className="flex items-center text-xl text-white py-2 mt-8">
                                    <HiLocationMarker /> <p className="font-md ml-2">Maitdevi, Kathmandu</p>
                                </div>
                                <div className="flex items-center text-xl text-white py-2">
                                    <FaPhoneAlt /> <p className="font-md ml-2">+977-01249340 | 9892428389</p>
                                </div>
                                <div className="flex items-center text-xl text-white py-2">
                                    <FiMail /> <p className="font-md ml-2">info@snakebitenepal.com</p>
                                </div>


                                <div className="flex justify-start mt-14 text-white">
                                    <p>Follow Us Here</p>
                                </div>
                                {/* social icons starts  */}
                                <div className=" icons mt-4 flex items center">

                                    <div className="bg_primaryDark text-xl rounded-full text-white p-4 mx-3 cursor-pointer hover:shadow-md hover:transform scale-125">
                                        <FaFacebookF />
                                    </div>

                                    <div className="bg_primaryDark text-xl rounded-full text-white p-4 mx-3 cursor-pointer hover:shadow-md hover:transform scale-125">
                                        <FaTwitter />
                                    </div>

                                    <div className="bg_primaryDark text-xl rounded-full text-white p-4 mx-3 cursor-pointer hover:shadow-md hover:transform scale-125">
                                        <FaInstagram />
                                    </div>

                                    <div className="bg_primaryDark text-xl rounded-full text-white p-4 mx-3 cursor-pointer hover:shadow-md hover:transform scale-125">
                                        <FaYoutube />
                                    </div>

                                </div>
                                {/* social icons ends  */}


                            </div>
                        </div>
                    </div>
            </div>
        </Page>
    )
}

export default Contact
