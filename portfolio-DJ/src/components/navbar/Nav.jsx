import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'

const Nav = () => {
  return (
    <div>
      <a href="#" ><BiHome /></a>
      <a href="#about" ><AiOutlineUser /></a>
      <a href="#experience" ><AiOutlineBook /></a>
      <a href="#serivesProvider" ><RiServiceLine /></a>
      <a href="#contact" ><IoMdContact /></a>
    </div>
  )
}

export default Nav