import React from 'react';
import Header from '../components/Header';
import './Inicio.css';

function Inicio() {

  return (
    <div className="container">
        <Header />
        <div className="cover">
            <div className="background">
                <img className='image-desktop' src="background-cover.svg" alt="" />
                <img className='image-mobile' src="bg-mobile.svg" alt="" />
            </div>
            <div className="left">
              <div className="text-div">
                <div className="text-internal-div">
                  <div className="name"> 
                    MANASSÉS MARCELINO
                  </div>
                  <div className="title">
                    <p>
                      Designer de Sistemas <b>UX | UI</b>
                    </p>
                  </div>
                  <div className="slogan">
                    Simplificando o complexo através de um bom design  
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="internal-div">
                <div className="found-me-also">
                  Me encontre também
                </div>
                <div className="links">
                  <a href="https://github.com/ManassesMarcelino">
                    <img src="Github.svg" alt="Github" />
                  </a>
                  <a href="https://www.linkedin.com/in/manassés-marcelino-b46a4426b/">
                    <img src="Linkedin.svg" alt="Linkedin" />
                  </a>
                  <a href="https://instagram.com/#_marcelinoxxz">
                    <img src="Instagram.svg" alt="Instagram" />
                  </a>
                  <a href="">
                    <img src="Canva.svg" alt="Canva" />
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="development">
          <div className="top">
            <div className="text">
              Pilares que 
              <p className='alternative-color'>
                norteiam 
              </p>
              nossos 
              <p className='alternative-color'>
                desenvolvimentos 
              </p>
              em UX/UI.
            </div>
          </div>
          <div className="bottom">
            <div className="card">
              <div className="image">
                <img src="inclusive.svg" alt="" />
              </div>
              <div className="description">
                <div className="title-desc">
                  Design inclusivo
                </div>
                <div className="text-desc">
                  <span className="color-d">Design intuitivo</span> que garante o acesso a todos, independentemente de limitações físicas ou cognitivas.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="intuitive.svg" alt="" />
              </div>
              <div className="description">
                <div className="title-desc">
                  Interfaces intuitivas
                </div>
                <div className="text-desc">
                <span className="color-d">Interfaces intuitivas</span> que facilitam e orientam a navegação, tornando a interação simples e eficiente. 
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="attractive.svg" alt="" />
              </div>
              <div className="description">
                <div className="title-desc">
                  Visual atraente
                </div>
                <div className="text-desc">
                <span className="color-d">Visual atraente</span> que comunica propósito, reforça a identidade da marca e melhora a experiência.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me"></div>
        <div className="team"></div>
        <div className="experience"></div>
        <div className="projects"></div>
    </div>
  )
};

export default Inicio;