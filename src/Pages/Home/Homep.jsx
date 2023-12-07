import React from 'react'
import  '../Home/Homep.css'

import Leftsidebar from '../../Component/LeftSidebar/Leftsidebar'

import Rightsidebar from '../../Component/Rightsidebar/Rightsidebar'
import Topbarnav from '../../Component/Topbar/Topbarnav'
import Feedcontent from '../../Component/Feeds/Feedcontent'

const Homep = () => {
  return (
    <>
    <Topbarnav/>
    <div className='container home py-3'>
        <Leftsidebar/>
        <Feedcontent/>
        <Rightsidebar/>
    </div>
    </>
  )
}

export default Homep