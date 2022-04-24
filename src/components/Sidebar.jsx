import React,{useState} from 'react';
import {motion} from 'framer-motion';
import './Sidebar.css';
// import {UilEstate} from "@iconscout/react-unicons"; -> imported in data.js
import { SidebarData } from '../Data/Data';
import {UilSignOutAlt, UilBars} from "@iconscout/react-unicons";
// import uuid from 'uuid';
const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    // creating toggle to open sidebar using useState hook
    const [expanded, setExpanded] = useState(true);

    const sidebarVariants = {
        true:{
            left: '0',
        },
        false:{
            left: '-60%',
        },
    }
  return (
      <>
                <div className='bars' style={expanded?{left:'60%'}: {left: '5%'}} onClick={()=> setExpanded(!expanded)} >
                    <UilBars style={{cursor: "pointer"}} />
                </div>
            <motion.div className="Sidebar"
            variants={sidebarVariants}
            animate={window.innerWidth<=768?`${expanded}`: ''}
            >
                {/* logo */}
                <div className="logo">
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo" />
                    <span>Sh<span>o</span>ps</span>
                </div>
                {/* menu */}
                <div className="menu">
                {SidebarData.map((item,index)=>{
                    return(
                        <div  className={selected===index?"menuItem active":"menuItem"} key={index} onClick={()=>setSelected(index)} >
                            <item.icon />
                                <span>{item.heading}</span>
                        </div>
                    )
                })}  
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>
                </div>
            </motion.div>
      </>
  )
}

export default Sidebar;