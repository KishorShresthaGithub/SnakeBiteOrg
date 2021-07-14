import React from 'react'
import AddSnakeArt from '../../components/Dashboard/SnakeArt.jsx/AddSnakeArt'
import ViewSnakeArt from '../../components/Dashboard/SnakeArt.jsx/ViewSnakeArt'
import DashCard from '../../template/DashCard'


function DSnakeArt() {
    return (
        <>
            <DashCard 
                btnAdd="Add Snakes in Art & Culture" 
                btnView="View Snakes in Art & Culture" 
                AddComponent={<AddSnakeArt />} 
                ViewComponents={<ViewSnakeArt />}>
            </DashCard>
        </>
    )
}

export default DSnakeArt
