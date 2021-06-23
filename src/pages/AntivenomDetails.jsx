import React from 'react'
import AntivenomCentersCard from '../components/Antivenom/AntivenomCentersCard'
import TitleBar from '../components/TitleBar'
import Page from '../template/Page'

function AntivenomDetails() {
    return (
        <Page >
            <TitleBar name="Antivenom Centers" />
            <div className="container mx-auto px-4">
                {/* heading starts  */}
             <div className="flex justify-between py-10">
                    <div className="">
                        <h1 className="font-bold text-xl">Find Antivenom Centers In Your District</h1>
                        <select name="" id="">
                            <option value="">Arghakhanchi</option>
                            <option value="">Kathmandu</option>
                        </select>
                    </div>
                    <div className="text-right">
                        <h1 className="font-bold text-lg">Emergency Call</h1>
                        <h1 className="font-bold text-red-600 text-xl">+943438989349</h1>
                    </div>
                </div>
                {/* heading ends  */}

                {/* card section starts  */}
                <div className="mt-8 grid md:grid-cols-4 gap-5 mb-20">
                    <AntivenomCentersCard />
                    <AntivenomCentersCard />
                    <AntivenomCentersCard />
                    <AntivenomCentersCard />

                </div>
            </div>
             {/* container ends  */}
        </Page>
    )
}

export default AntivenomDetails
