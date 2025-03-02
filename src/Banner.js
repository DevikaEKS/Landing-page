import React from 'react'
import Bannerimg from "../src/assets/Rectangle 3.png"


import './Banner.css';
function Landingpage() {
  return (
    <>
      <section id='landing'>
        <div className='background container-fluid'>
          <div className='content pt-3'>
            <p className='certify'>CERTIFY YOUR</p>
            <h1 className='main-text'>SUCCESS</h1>
            <p className='para'>ELEVATE YOUR <span className='newtext'>SKILLS</span> AND <span className='newtext'>ACCREDITED CERTIFICATIONS!</span></p>
            <button>GET STARTED</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landingpage