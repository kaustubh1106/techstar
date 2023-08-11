import React from 'react'

import Card from './Card'
import data from './Data.js'
import '../styles/Home.css'
import '../styles/About.css'
const Home = () => {
  const card = data.map((props) => {
    return (
      <Card
        img={props.img}
        content={props.content}
      />
    )
  }
  )
  return (
    <>
      <div className='home'>
        <div className="home1" id='home'>
          <span className='text home-text'>
            <h1>Welcome</h1>
            <h2>This is Techstar.</h2>
            <p> A technical blog website</p>
          </span>
        </div>
        <div id='topics'>
          <h1>Trending Topics</h1>
        
        <div className="home2" >
          {card}
        </div>
        </div>
        <div className='home3' id='about'>
          <h1>About Us</h1>
          <p>Welcome to our technical blog, a space where technology meets curiosity! We are a team of passionate tech enthusiasts dedicated to exploring the ever-evolving world of innovation. Our mission is to unravel the complexities of the digital realm and present them to you in a clear, engaging, and insightful manner.<br/>

            At our core, we believe that technology is more than just lines of code – it's a dynamic force that shapes our lives and the future. From the latest breakthroughs in artificial intelligence to the intricacies of blockchain, we're here to break down the jargon and provide you with a deeper understanding of the tech landscape.<br/>

            Whether you're an aspiring developer, a seasoned IT professional, or simply someone eager to stay informed, our blog offers a diverse range of articles, tutorials, and analyses. Join us on this exciting journey as we dive into the realms of programming languages, emerging trends, cybersecurity, and much more.<br/>

            We're thrilled to have you with us, and we invite you to embark on this enlightening exploration of all things tech. Let's learn, grow, and innovate together!</p>
        </div>
      </div>

    </>
  )
}

export default Home