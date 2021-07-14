import React from 'react'
import AddNews from '../../components/Dashboard/News/AddNews'
import ViewNews from '../../components/Dashboard/News/ViewNews'
import DashCard from '../../template/DashCard'


function DNews() {
    return (
        <>
            <DashCard 
                btnAdd="Add News" 
                btnView="View News" 
                AddComponent={<AddNews />} 
                ViewComponents={<ViewNews />}>
            </DashCard>
        </>
    )
}

export default DNews
