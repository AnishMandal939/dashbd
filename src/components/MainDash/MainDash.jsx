// Mainsection is left
// TODO: Sidebar is done

// TODO: //main dashboard is left

import React from 'react'
import Table from '../Table/Table';
import Cards from './../Cards/Cards';
import './MainDash.css';
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1 className="heading_brand">Dashboard</h1>
        <Cards />
        
        <Table />
    </div>
  )
}

export default MainDash