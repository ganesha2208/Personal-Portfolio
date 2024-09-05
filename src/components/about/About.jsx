import React from 'react'
import './about.css'
import myImage from '../../assets/hero (2).jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
import { Link } from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'

const About = () => {

  // const navigate = useNavigate()

  const handleClick =()=>
  {
    console.log("hi");

    
  }
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card' onClick={handleClick}>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Masters Degree</h5>
                  <small>MCA(Data Science)<br /><i>MIT ADT UNIVERSITY,PUNE</i></small>
              </article>
              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Bachelor Degree</h5>
                  <small>BSC(Computer Science)<br /><i>S.S.P.U PUNE</i></small>
              </article>

              {/* <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.13</small>
              </article> */}

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Full Stack Developer</li>
                      <li>Python</li>
                      <li>AWS</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Intern at AI4M Technology </b> at Baner,Pune. 
                    I'm an enthusiastic and driven So student seeking  Job opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation in Masters in Computer Application and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About