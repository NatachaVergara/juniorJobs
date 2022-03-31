/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import './AboutUs.scss'

const AboutUs = () => {
  let nosotros = [
    { name: 'Alexander Huerta', city: '', rol:'', linkedin:'', github:'', skills:[]},
    { name: 'Brayan Tabarez', city: '', rol:'', linkedin:'', github:'', skills:[]},
    { name: 'Gabriel Llanez', city: '', rol:'', linkedin:'', github:'', skills:[]},
    { name: 'Gaspar Castelo', city: '', rol:'', linkedin:'', github:'', skills:[]},
    { name: 'Hernan García', city: '', rol:'', linkedin:'', github:'', skills:[]},
    { name: 'Ingrid Inga', city: '', rol:'', linkedin:'', github:'', skills:[]},
    { name: 'Leonardo Alvez', city: '', rol:'', linkedin:'', github:'', skills:[]},
    { name: 'Matias Mazparrotte', city: '', rol:'', linkedin:'', github:'', skills:[]},
    { name: 'Matias Semelman', city: '', rol:'', linkedin:'', github:'', skills:[] },
    { name:' Natacha Vergara', city: '', rol:'', linkedin:'', github:'', skills:[]}


  ]





  return (
    <div className='mt-5 pt-5 body'>

      <section className="aboutBody">
        <p >Nuestra misión</p>
        <h4>Creemos que todo junior puede encontrar su primer empleo a los pocos meses de empezar con la búsqueda </h4>
        <h4>También creemos que lo puede hacer sin tener que transitar por cientos de bolsas de trabajo, de tener que una y otra vez cargar los mismos datos</h4>
        <h4>Por eso acá le vamos a dar la oportunidad de encontrar ese recruter/compañía que esté buscando un perfil como el suyo</h4>
      </section>

      <section className="aboutImg m-5">
        <UncontrolledCarousel
          items={[
            {
              altText: 'Slide 1',
              key: 1,
              src: 'https://img.freepik.com/foto-gratis/grupo-personas-que-trabajan-plantilla-sitio-web_53876-25068.jpg?t=st=1648673036~exp=1648673636~hmac=541cc7ba1d8ae933673eb96fad8d59291ce5ecbcb50ee80072904807cf31a56f&w=826'
            },
            {
              altText: 'Slide 2',
              key: 2,
              src: 'https://img.freepik.com/foto-gratis/vista-superior-equipo-companeros-trabajo-trabajando-oficina_329181-12055.jpg?t=st=1648673036~exp=1648673636~hmac=b749dbe3d27f60a02029489bf6a48bfd4afd7ab5917f7ddbf5fa6edcb309ef76&w=740'
            },
            {
              altText: 'Slide 3',
              key: 3,
              src: 'https://img.freepik.com/foto-gratis/ejecutivos-negocios-discutir-sus-colegas-whiteboa_1170-1837.jpg?t=st=1648673036~exp=1648673636~hmac=060f1db3299b63ca1e6577a5e3cfc5f83d3292f26b99dbccb8d0b3d57ab48417&w=740'
            }
          ]}
        />
      </section>

      <section className="aboutUS mt-5 mb-5 pb-5">
        <h1 className='text-light m-5'>El equipo</h1>
        <div className="row d-flex justify-content-center align-items-center">
         
          {nosotros.map((n, i) => (
            <div className="card-container col col-md-4" key={i} >
              <img className="round" src="https://randomuser.me/api/portraits/lego/0.jpg" alt="user" />
              <h3>{ n.name}</h3>
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