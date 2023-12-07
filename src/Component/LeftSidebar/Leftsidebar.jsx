import React from 'react'
import  '../LeftSidebar/sidebar.css'
import Photos from '../../Assest/Photos.webp'
import profile from '../../Assest/profile.jpg'
const Leftsidebar = () => {
  return (
 <>
 <div className='Leftsidebar px-3' >
 <div className='leftsidebarup card'>
    <div className='leftsidebar_profile'>
      <img src={Photos} alt="" />
      <div className='sidebar_profilpic'>
        <img src={profile} alt="" /><br />
      <span>Sadan kumar</span>
      <p className='px-2'>frontend web devloper || HTML || CSS || JAVA SCRIPT || REACT JS || TRAINED BY ACCIO JOB</p>
      </div>
    </div>
    <hr />
    <div className='leftsidebar_tools'>
     <div className='tools_list'>
     <a href="">
        <span className='px-2'>Analytics & tools</span><br />
        <small className='px-2'>Post impressions</small>
        <hr />
      </a>
     </div>
     <div className='tools_list'>
     <a href="">
        <small className='px-2'>Strengthen Your profile with an AI</small><br />
        <small className='px-2'>writting assistant</small><br />
        <span className='px-2'>try Premium for free</span>
        <hr />
      </a>
     </div> <div className='tools_list'>
     <a href="">
       <span className='px-2'>My items</span>
      </a>
     </div><br />

    </div>
  </div> 
  <br />
  <div className='leftsidebardown card'>
    <div className='leftsidebardown_list'>
      <span className='px-2'><a href="">Recent</a></span>
      <ul>
        <li><a href=""><small>Whitecircle</small></a></li>
        <li><a href=""><small>jobs</small></a></li>
        <li><a href=""><small>java Script</small></a></li>
      </ul>
    </div>
    <div className='leftsidebardown_list'>
      <span className='px-2'><a href="">Group</a></span>
      <ul><li>
        <a href="">Whitecircle</a></li>
        <li><a href="">jobs</a></li>
        </ul>
    </div>
    <div className='leftsidebardown_list'>
      <span className='px-2'><a href="">Event</a></span><br />
      <span className='px-2'><a href="">Followed Hastag</a></span>
    </div>
    <hr />
    <div className='leftsidebardown_list'>
      <span className='px-2'><a href="">Discover more</a></span>
    </div><br />
  </div>
 </div>
 </>
  )
}

export default Leftsidebar