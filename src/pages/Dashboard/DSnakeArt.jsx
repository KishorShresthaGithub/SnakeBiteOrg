import React from 'react'
import Dashboard from '../../template/Dashboard'
import DashCard from '../../template/DashCard'
import AddSnakeArt from '../../components/Dashboard/SnakeArt.jsx/AddSnakeArt'
import ViewSnakeArt from '../../components/Dashboard/SnakeArt.jsx/ViewSnakeArt'


function DSnakeArt() {
    return (
        <Dashboard>
            <DashCard 
                btnAdd="Add Snakes in Art & Culture" 
                btnView="View Snakes in Art & Culture" 
                AddComponent={<AddSnakeArt />} 
                ViewComponents={<ViewSnakeArt />}>
            </DashCard>
        </Dashboard>
    )
}

export default DSnakeArt
