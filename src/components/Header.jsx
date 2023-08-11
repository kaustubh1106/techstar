import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav className='navbar'>
        <h1>Techstar.</h1>
      
        <main className='content'>
            <HashLink to={"/#home"} id='h'>Home</HashLink>
            <HashLink to={"/#topics"} id= 'b'>Topics</HashLink>
            <Link to={"/writeablog"} id='s'><button className='btn1'>Write a blog</button></Link>
            <Link to={"/contact"} id='c'>Contact</Link>
            <HashLink to={"/#about"} id='a'>About</HashLink>
        </main>
    </nav>
  )
}

export default Header