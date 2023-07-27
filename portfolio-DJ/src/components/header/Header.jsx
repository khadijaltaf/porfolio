import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <>
    <header>
      <div className="container header_container">
        <h4>Hello! I am</h4>
        <h1>KHADIJA ALTAF</h1>
        <h5 className='text-light'>Web developer/designer and QA Engineer</h5>

        <CTA />
      </div>
    </header>
    </>
  )
}

export default Header