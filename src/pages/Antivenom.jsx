import React from 'react'
import TitleBar from '../components/TitleBar'
import Page from '../template/Page'
import Antivenom_card from '../components/Antivenom_card'

function Antivenom() {
    
    const AntivenomData=[
        {
            name:'kathmandu',
            no:'18'
        },
        {
            name:'Rupandehi',
            no:'08'
        },
        {
            name:'Bhaktapur',
            no:'09'
        },
        {
            name:'Sindupalchowk',
            no:'11'
        },
        {
            name:'Tanahu',
            no:'04'
        },
        {
            name:'Kaski',
            no:'18'
        },
        {
            name:'Birjung',
            no:'13'
        },
        {
            name:'Gulmi',
            no:'10'
        }
    ]
    return (
        <Page>
            <TitleBar name="Antivenom Center" />
            
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
                
            </div>
             {/* antivenom center starts  */}
             <div className="pt-10 pb-20 anitvenom mt-10 md:mt-20 bg_lightGrey">
                    {/* <p className="mt-5">He went to Mario Negri Institute of Pharmacological research, Bergamo, Italy for Fellow of International Society of Nephrology (Italy); Fellow ISPD (Dialysis) (London, UK); Fellow JSN (Mie University, </p> */}
                    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
                        {AntivenomData.map((av)=>(
                            <Antivenom_card key={AntivenomData.indexOf(av)} name={av.name} no={av.no} />
                        ))}
                    </div>

                    {/* pagination starts  */}
                    <div className="my-4 md:mt-20 md:mb-10 flex items-center justify-center">
                            <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4 bg-white">1</p>
                            <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4 bg-white">2</p>
                            <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4 bg-white">3</p>
                            <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4 bg-white">4</p>

                    </div>
                    {/* pagination ends  */}

                </div>
                {/* antivenom center ends  */}
            
            
        </Page>
    )
}

export default Antivenom
