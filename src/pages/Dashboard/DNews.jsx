import React from 'react'
import Dashboard from '../../template/Dashboard'
import DashCard from '../../template/DashCard'
import AddNews from '../../components/Dashboard/News/AddNews'
import ViewNews from '../../components/Dashboard/News/ViewNews'


function DNews() {
    return (
        <Dashboard>
            <DashCard 
                btnAdd="Add News" 
                btnView="View News" 
                AddComponent={<AddNews />} 
                ViewComponents={<ViewNews />}>
            </DashCard>
        </Dashboard>
    )
}

export default DNews
