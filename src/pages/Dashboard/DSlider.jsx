import React from 'react'
import Dashboard from '../../template/Dashboard'
import DashCard from '../../template/DashCard'
import AddSlider from '../../components/Dashboard/Slider/AddSlider'
import ViewSlider from '../../components/Dashboard/Slider/ViewSlider'


function DSlider() {
    return (
        <Dashboard>
            <DashCard 
                btnAdd="Add Slider" 
                btnView="View Slider" 
                AddComponent={<AddSlider />} 
                ViewComponents={<ViewSlider />}>
            </DashCard>
        </Dashboard>
    )
}

export default DSlider
