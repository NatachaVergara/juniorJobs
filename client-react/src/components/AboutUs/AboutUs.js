/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './AboutUs.scss'

const AboutUs = () => {
  let us = [
    { name: 'Brayan Tabarez', city: '', rol: 'QA', linkedin: '#', github: '#', skills: ['Tester manual'], img: '' },
    // { name: 'Gabriel Llanez', city: '', rol: 'FrontEnd', linkedin: '#', github: '#', skills: ['Front End Development', 'HTML', 'CSS', 'JavaScript', 'React'] },
    { name: 'Gaspar Castelo', city: 'Rosario', rol: 'FrontEnd', linkedin: '#', github: 'https://github.com/GaspiCastello', skills: ['Front End Development', 'HTML', 'CSS', 'JavaScript', 'React'], img: '' },
    { name: 'Hernan García', city: '', rol: 'BackEnd', linkedin: '#', github: 'https://github.com/HernanGarcia1985', skills: ['Back End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJs'], img: '' },
    { name: 'Leonardo Alvez', city: '', rol: 'FrontEnd', linkedin: '#', github: 'https://github.com/leoalvezmdz', skills: ['Front End Development', 'HTML', 'CSS', 'JavaScript', 'React'], img: '' },
    { name: 'Matias Mazparrotte', city: 'GBA', rol: 'FrontEnd', linkedin: '#', github: 'https://github.com/matiasfeliu92', skills: ['Back End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJs'], img: '' },
    { name: 'Matias Semelman', city: 'CABA', rol: 'BackEnd', linkedin: '#', github: 'https://github.com/matiassemelman', skills: ['Front End Development', 'HTML', 'CSS', 'JavaScript', 'React'], img: '' },
    { name: 'Natacha Vergara', city: 'CABA', rol: 'FrontEnd', linkedin: 'https://www.linkedin.com/in/natacha-vergara', github: 'https://github.com/NatachaVergara', skills: ['Front End Development', 'HTML', 'CSS', 'JavaScript', 'React'], img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c32fd.appspot.com/o/aboutMe%2Fimg-portfolio.jpg?alt=media&token=314824cb-ab0a-4442-bd7c-871e163d3b92' }
  ]







  return (
    <div className='mt-5 pt-5 mb-0 body'>

      <section className="aboutBody ms-md-5">
        <p>Our mission</p>
        <h4>We believe every junior can find their first job just a few months after the search is started.
        </h4>
        <h4>We also believe that it can be done without having to look in a hundred different jobs sites, without having to write over and over the same information everytime is time to apply for a job offer.
        </h4>
        <h4>That's why  we are bringing here the oportunity for that new talent to find the first job in just one place.
        </h4>
      </section>

      <section className="aboutImg container d-none d-md-block ms-5">

        <img src="https://img.freepik.com/foto-gratis/colegas-dando-golpe-puno_53876-64857.jpg?t=st=1648735719~exp=1648736319~hmac=ff8a10d3d246e50a68cfd38cf67274b0a0daed6542150b2c64feabb7211173bc&w=740" className="d-block" alt="teamPicture" />

      </section>



      <section className="aboutUS mt-5 mb-0 pb-5 ms-md-5">
        <h1 className='text-light m-5'>The team</h1>
        <div className="row d-flex justify-content-center align-items-center">

          {us.map((n, i) => (
            <div className="card-container col col-md-4" key={i} >

              {!n.img ? <img className="round"
                src="https://randomuser.me/api/portraits/lego/0.jpg" alt="user" /> : <img className="round"
                  src={n.img} alt="user" />}

              <h3>{n.name}</h3>
              <h6>{n.city}</h6>
              <p>User interface designer and <br /> front-end developer</p>
              <div className="buttons">
                <a href={n.linkedin} target="_blank" rel="noopener noreferrer" className="btn primary">
                  Linkedin
                </a>
                <a href={n.github} target="_blank" rel="noopener noreferrer" className="btn primary ghost">
                  Github
                </a>
              </div>
              <div className="skills">
                <h6>Skills</h6>
                <ul>{n.skills.map((skill, i) => (<li key={i}>{skill} </li>))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>



    </div>

  )
}

export default AboutUs