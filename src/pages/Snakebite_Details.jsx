import React from 'react'
import Books from '../components/snakebites/Books'
import Snakebite from '../components/snakebites/Snakebite'
import Youtube from '../components/snakebites/Youtube'
import TitleBar from '../components/TitleBar'
import Page from '../template/Page'
import { FacebookProvider, Share } from 'react-facebook';
import {FaFacebookF} from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'


function Snakebite_Details() {
    return (
        <Page>
        <TitleBar name="Snakebite Details" />
        <div className="container mx-auto px-4">
            
            {/* container snakes starts  */}
            <div className="grid md:grid-cols-3 my-10">
                {/* snake articles starts  */}
                <div className="col-span-2">
                    <h1 className="font-bold mt-5 text-3xl">
                        Rattlesnakes
                    </h1>
                    <p className="py-2 flex items-center"><BiTime className="mr-2" /> June 2, 2021</p>
                    <img src="https://www.sciencenewsforstudents.org/wp-content/uploads/2021/01/010821_mt_climbing-snakes_feat-1030x580.jpg" alt="" />
                    <p className="leading-6 py-10">
                        Snakes do a lot more than slither. Some swim, while others sidewind across sand. Some snakes even fly. The brown tree snake has a brand-new trick for climbing trees. It wraps its tail around a tree or pole in a lasso-like grip. Then it wriggles to propel itself up. It isn’t easy for the snakes. But it works. And this looping trick lets these snakes slowly make it up structures that would otherwise be too wide to climb.
                    </p>
                        
                    
                    {/* facebook share starts  */}
                    <div className="my-2 flex items-center">
                    <FacebookProvider appId="123456789">
                        <Share href="http://www.facebook.com">
                        {({ handleClick, loading }) => (
                            <button type="button" disabled={loading} onClick={handleClick} className="bg-blue-700 px-4 py-2 text-white shadow rounded flex items-center"> <FaFacebookF className='mr-2' /> Share</button>
                        )}
                        </Share>
                    </FacebookProvider>
                    </div>
                    {/* facebook share ends  */}
                </div>
                {/* snake articles ends  */}

                {/* books and articles starts  */}
                <Books />
                {/* books and articles ends  */}
                
            </div>
            {/* container snakes ends  */}
        </div>
        <Youtube />
        </Page>
    )
}

export default Snakebite_Details
