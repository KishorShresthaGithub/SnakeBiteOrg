import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer'

function Page(props) {
    return (
        <div>
            <Nav />
            {props.children}
            <Footer />
        </div>
    )
}

export default Page
