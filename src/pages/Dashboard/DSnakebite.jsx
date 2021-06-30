import React from 'react'
import Dashboard from '../../template/Dashboard'
import DashCard from '../../template/DashCard'
import AddSnakebite from '../../components/Dashboard/Snakebite/AddSnakebite'
import ViewNews from '../../components/Dashboard/News/ViewNews'
import ViewSnakebite from '../../components/Dashboard/Snakebite/ViewSnakebite'


function DSnakebite() {
    return (
        <Dashboard>
            <DashCard 
                btnAdd="Add Snakes & Snakebites" 
                btnView="View Snakes & Snakebites" 
                AddComponent={<AddSnakebite />} 
                ViewComponents={<ViewSnakebite />}>
                    
            </DashCard>
        </Dashboard>
    )
}

export default DSnakebite
