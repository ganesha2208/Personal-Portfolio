import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/Project_image_swiggy.jpg'
import IMG2 from '../../assets/maxresdefault.jpg'
import IMG3 from '../../assets/portfolio-1.jpg'
import IMG4 from '../../assets/portfolio_photo.png'
import IMG5 from '../../assets/portfolio-3.jpg'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Swiggy Replica</h3>
            <small className='text-light'> ReactJs | TailWind CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ganesha2208/NamasteReact" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Truck Loading Management System</h3>
            <small className='text-light'>ReactJS | CSS | Python | AWS | DynamoDB | Deep Learning |</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thakshila-Bandara/Beauty-Garden" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article> */}
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thakshila-Bandara/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://thakshila-bandara.github.io/my-portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Movie recommendation System</h3>
            <small className='text-light'>Python | Machine Learning </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ganesha2208/Movie_Recommender_System" target="_blank" rel='noreferrer' className='btn'>Github</a>
             
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Gender and Age Detection System</h3>
            <small className='text-light'>Python | Deep Learning | OpenCV  </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ganesha2208/Gender-and-age-detection-sys" target="_blank" rel='noreferrer' className='btn'>Github</a>
             
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects