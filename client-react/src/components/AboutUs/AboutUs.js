/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './AboutUs.scss'

const AboutUs = () => {
  let nosotros = [
    { name: 'Alexander Huerta', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: 'Brayan Tabarez', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: 'Gabriel Llanez', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: 'Gaspar Castelo', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: 'Hernan García', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: 'Ingrid Inga', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: 'Leonardo Alvez', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: 'Matias Mazparrotte', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: 'Matias Semelman', city: '', rol: '', linkedin: '', github: '', skills: [] },
    { name: ' Natacha Vergara', city: '', rol: '', linkedin: '', github: '', skills: [] }


  ]







  return (
    <div className='mt-5 pt-5 body container'>

      <section className="aboutBody">
        <p >Nuestra misión</p>
        <h4>Creemos que todo junior puede encontrar su primer empleo a los pocos meses de empezar con la búsqueda </h4>
        <h4>También creemos que lo puede hacer sin tener que transitar por cientos de bolsas de trabajo, de tener que una y otra vez cargar los mismos datos</h4>
        <h4>Por eso acá le vamos a dar la oportunidad de encontrar ese recruter/compañía que esté buscando un perfil como el suyo</h4>
      </section>

      <section className="aboutImg container">
      
        <img src="https://img.freepik.com/foto-gratis/colegas-dando-golpe-puno_53876-64857.jpg?t=st=1648735719~exp=1648736319~hmac=ff8a10d3d246e50a68cfd38cf67274b0a0daed6542150b2c64feabb7211173bc&w=740" className="d-block" alt="#" />
           
      </section>



      <section className="aboutUS mt-5 mb-5 pb-5 ms-md-5">
        <h1 className='text-light m-5'>El equipo</h1>
        <div className="row d-flex justify-content-center align-items-center">

          {nosotros.map((n, i) => (
            <div className="card-container col col-md-4" key={i} >
              <img className="round" src="https://randomuser.me/api/portraits/lego/0.jpg" alt="user" />
              <h3>{n.name}</h3>
              <h6>New York</h6>
              <p>User interface designer and <br /> front-end developer</p>
              <div className="buttons">
                <a href="#" className="btn primary">
                  Linkedin
                </a>
                <a href="#" className="btn primary ghost">
                  Github
                </a>
              </div>
              <div className="skills">
                <h6>Skills</h6>
                <ul>
                  <li>UI / UX</li>
                  <li>Front End Development</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node</li>
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