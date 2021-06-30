import React from 'react'
import Dashboard from '../../template/Dashboard'
import DashCard from '../../template/DashCard'
import AddSlider from '../../components/Dashboard/Slider/AddSlider'
import ViewSlider from '../../components/Dashboard/Slider/ViewSlider'
import AddAntivenom from '../../components/Dashboard/Antivenom/AddAntivenom'
import ViewAntivenom from '../../components/Dashboard/Antivenom/ViewAntivenom'


function DAntivenom() {
    return (
        <Dashboard>
            <DashCard 
                btnAdd="Add Antivenom" 
                btnView="View Antivenom" 
                AddComponent={<AddAntivenom />} 
                ViewComponents={<ViewAntivenom />}>
            </DashCard>
        </Dashboard>
    )
}

export default DAntivenom
