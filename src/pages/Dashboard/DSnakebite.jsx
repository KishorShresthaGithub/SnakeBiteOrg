import React from 'react'
import Dashboard from '../../template/Dashboard'
import DashCard from '../../template/DashCard'
import AddSnakebite from '../../components/Dashboard/Snakebite/AddSnakebite'
import ViewNews from '../../components/Dashboard/News/ViewNews'


function DSnakebite() {
    return (
        <Dashboard>
            <DashCard 
                btnAdd="Add Snakes & Snakebites" 
                btnView="View Snakes & Snakebites" 
                AddComponent={<AddSnakebite />} 
                ViewComponents={<ViewNews />}>
                    
            </DashCard>
        </Dashboard>
    )
}

export default DSnakebite
