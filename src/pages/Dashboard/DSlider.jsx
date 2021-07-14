import React from 'react'
import AddSlider from '../../components/Dashboard/Slider/AddSlider'
import ViewSlider from '../../components/Dashboard/Slider/ViewSlider'
import DashCard from '../../template/DashCard'


function DSlider() {
    return (
        <>
            <DashCard 
                btnAdd="Add Slider" 
                btnView="View Slider" 
                AddComponent={<AddSlider />} 
                ViewComponents={<ViewSlider />}>
            </DashCard>
        </>
    )
}

export default DSlider
