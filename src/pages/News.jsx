import React from 'react'
import NewsCard from '../components/NewsCard'
import TitleBar from '../components/TitleBar'
import Page from '../template/Page'

function News() {
    return (
        <Page>
            <TitleBar name="news" />
            <div className="container mx-auto px-4">
                <div className="">
                    <h1 className="text-xl md:text-2xl font-bold mt-10">News & Update</h1>
                    <input type="text" className="mt-6 border-2 border-gray-200 px-5 shadow-md py-1.5 rounded-full w-80" placeholder="search...." />
                </div>
                <div className="grid md:grid-cols-4 gap-7 py-10">
                    <NewsCard Ndate="june 2, 2021"
                        Ncategory="snakes"
                        Ntitle="Save The Snakes"
                        Nimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk67AnSJe-2Ltqbw2ULvam_u_P3gktDsLOzYiW0_w5O9OSygBCvjH_7AXZj9wJF9Ks-d8&usqp=CAU"
                        />
                        <NewsCard Ndate="june 2, 2021"
                        Ncategory="snakes"
                        Ntitle="Snakes facts and information"
                        Nimg="https://i.natgeofe.com/n/f80a6834-c7d0-4e93-b113-ae708652a527/snakes_01.jpg"
                        />
                        <NewsCard Ndate="june 2, 2021"
                        Ncategory="snakes"
                        Ntitle="Save The Snakes"
                        Nimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk67AnSJe-2Ltqbw2ULvam_u_P3gktDsLOzYiW0_w5O9OSygBCvjH_7AXZj9wJF9Ks-d8&usqp=CAU"
                        />
                        <NewsCard Ndate="june 2, 2021"
                        Ncategory="snakes"
                        Ntitle="Save The Snakes"
                        Nimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk67AnSJe-2Ltqbw2ULvam_u_P3gktDsLOzYiW0_w5O9OSygBCvjH_7AXZj9wJF9Ks-d8&usqp=CAU"
                        />
                        <NewsCard Ndate="june 2, 2021"
                        Ncategory="snakes"
                        Ntitle="Save The Snakes"
                        Nimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk67AnSJe-2Ltqbw2ULvam_u_P3gktDsLOzYiW0_w5O9OSygBCvjH_7AXZj9wJF9Ks-d8&usqp=CAU"
                        />
                        <NewsCard Ndate="june 2, 2021"
                        Ncategory="snakes"
                        Ntitle="Save The Snakes"
                        Nimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk67AnSJe-2Ltqbw2ULvam_u_P3gktDsLOzYiW0_w5O9OSygBCvjH_7AXZj9wJF9Ks-d8&usqp=CAU"
                        />
                        <NewsCard Ndate="june 2, 2021"
                        Ncategory="snakes"
                        Ntitle="Save The Snakes"
                        Nimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk67AnSJe-2Ltqbw2ULvam_u_P3gktDsLOzYiW0_w5O9OSygBCvjH_7AXZj9wJF9Ks-d8&usqp=CAU"
                        />
                </div>
                {/* pagination starts  */}
                <div className="my-4 md:my-10 flex items-center justify-center">
                        <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4">1</p>
                        <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4">2</p>
                        <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4">3</p>
                        <p className="border border-gray-200 shadow-md px-4 py-2 cursor-pointer mr-4">4</p>

                </div>
                {/* pagination ends  */}
            </div>
        </Page>
    )
}

export default News
